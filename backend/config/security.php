<?php

require_once __DIR__ . '/config.php';

function set_security_headers(): void
{
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    header('Permissions-Policy: geolocation=(), microphone=(), camera=()');
}

function handle_cors(): void
{
    $allowed = array_filter(array_map('trim', explode(',', (string) app_env('CORS_ALLOWED_ORIGINS', ''))));
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ($origin && in_array($origin, $allowed, true)) {
        header("Access-Control-Allow-Origin: {$origin}");
        header('Vary: Origin');
        header('Access-Control-Allow-Credentials: true');
    }

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function start_api_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => app_env('APP_ENV', 'local') !== 'local',
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function csrf_token(): string
{
    start_api_session();
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verify_csrf_token(): void
{
    if (app_env('CSRF_PROTECTION', 'true') !== 'true') {
        return;
    }

    start_api_session();
    $token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    $sessionToken = $_SESSION['csrf_token'] ?? '';

    if (!$token || !$sessionToken || !hash_equals($sessionToken, $token)) {
        json_response(['message' => 'Invalid CSRF token. Refresh the page and try again.'], 419);
    }
}

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function read_json_body(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '{}', true);

    if (!is_array($data)) {
        json_response(['message' => 'Invalid JSON payload.'], 400);
    }

    return $data;
}

function clean_value(mixed $value): ?string
{
    if ($value === null) {
        return null;
    }

    $cleaned = trim((string) $value);
    return $cleaned === '' ? null : $cleaned;
}

function require_method(string $method): void
{
    if ($_SERVER['REQUEST_METHOD'] !== $method) {
        json_response(['message' => 'Method not allowed.'], 405);
    }
}

function validate_required(array $data, array $fields): array
{
    $errors = [];
    foreach ($fields as $field) {
        if (clean_value($data[$field] ?? null) === null) {
            $errors[$field] = 'This field is required.';
        }
    }
    return $errors;
}

function validate_email_field(array $data, string $field = 'email'): array
{
    $value = clean_value($data[$field] ?? null);
    if ($value !== null && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
        return [$field => 'Enter a valid email address.'];
    }
    return [];
}

function validate_url_field(array $data, string $field = 'website_url', bool $required = false): array
{
    $value = clean_value($data[$field] ?? null);
    if ($value === null && !$required) {
        return [];
    }
    if ($value === null || !filter_var($value, FILTER_VALIDATE_URL)) {
        return [$field => 'Enter a valid URL including https://'];
    }
    return [];
}
