<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/security.php';

set_security_headers();
handle_cors();

try {
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/';
    $base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'])), '/');
    if ($base && $base !== '/' && str_starts_with($path, $base)) {
        $path = substr($path, strlen($base));
    }

    $segments = array_values(array_filter(explode('/', trim($path, '/'))));
    if (($segments[0] ?? null) !== 'api') {
        json_response(['message' => 'API route not found.'], 404);
    }

    $resource = $segments[1] ?? '';
    $slug = $segments[2] ?? null;

    match ($resource) {
        'csrf-token' => handle_csrf_token(),
        'contact' => handle_contact(),
        'book-consultation' => handle_consultation(),
        'audit-request' => handle_audit(),
        'blogs' => handle_collection('blog_posts', $slug),
        'case-studies' => handle_collection('case_studies', $slug),
        'portfolio' => handle_collection('portfolio_items', $slug),
        default => json_response(['message' => 'API route not found.'], 404),
    };
} catch (PDOException $exception) {
    json_response(['message' => 'Database error.', 'detail' => app_env('APP_ENV', 'local') === 'local' ? $exception->getMessage() : null], 500);
} catch (Throwable $exception) {
    json_response(['message' => 'Server error.', 'detail' => app_env('APP_ENV', 'local') === 'local' ? $exception->getMessage() : null], 500);
}

function handle_csrf_token(): void
{
    require_method('GET');
    json_response(['csrfToken' => csrf_token()]);
}

function handle_contact(): void
{
    require_method('POST');
    verify_csrf_token();

    $data = read_json_body();
    $errors = array_merge(
        validate_required($data, ['name', 'email', 'phone', 'service_interest', 'message']),
        validate_email_field($data)
    );

    if ($errors) {
        json_response(['message' => 'Please fix the highlighted fields.', 'errors' => $errors], 422);
    }

    $statement = db()->prepare(
        'INSERT INTO contact_messages
        (name, email, phone, company, service_interest, budget, message, source_page, status)
        VALUES
        (:name, :email, :phone, :company, :service_interest, :budget, :message, :source_page, :status)'
    );

    $statement->execute([
        ':name' => clean_value($data['name']),
        ':email' => clean_value($data['email']),
        ':phone' => clean_value($data['phone']),
        ':company' => clean_value($data['company'] ?? null),
        ':service_interest' => clean_value($data['service_interest']),
        ':budget' => clean_value($data['budget'] ?? null),
        ':message' => clean_value($data['message']),
        ':source_page' => clean_value($data['source_page'] ?? 'Website'),
        ':status' => 'new',
    ]);

    json_response(['message' => 'Contact message saved successfully.'], 201);
}

function handle_consultation(): void
{
    require_method('POST');
    verify_csrf_token();

    $data = read_json_body();
    $errors = array_merge(
        validate_required($data, ['name', 'email', 'phone', 'required_service', 'preferred_date', 'preferred_time']),
        validate_email_field($data),
        validate_url_field($data, 'website_url', false)
    );

    if ($errors) {
        json_response(['message' => 'Please fix the highlighted fields.', 'errors' => $errors], 422);
    }

    $statement = db()->prepare(
        'INSERT INTO consultation_requests
        (name, email, phone, company, website_url, business_type, required_service, preferred_date, preferred_time, message, status)
        VALUES
        (:name, :email, :phone, :company, :website_url, :business_type, :required_service, :preferred_date, :preferred_time, :message, :status)'
    );

    $statement->execute([
        ':name' => clean_value($data['name']),
        ':email' => clean_value($data['email']),
        ':phone' => clean_value($data['phone']),
        ':company' => clean_value($data['company'] ?? null),
        ':website_url' => clean_value($data['website_url'] ?? null),
        ':business_type' => clean_value($data['business_type'] ?? null),
        ':required_service' => clean_value($data['required_service']),
        ':preferred_date' => clean_value($data['preferred_date']),
        ':preferred_time' => clean_value($data['preferred_time']),
        ':message' => clean_value($data['message'] ?? null),
        ':status' => 'new',
    ]);

    json_response(['message' => 'Consultation request saved successfully.'], 201);
}

function handle_audit(): void
{
    require_method('POST');
    verify_csrf_token();

    $data = read_json_body();
    $errors = array_merge(
        validate_required($data, ['audit_type', 'name', 'email', 'phone', 'website_url', 'business_goal']),
        validate_email_field($data),
        validate_url_field($data, 'website_url', true)
    );

    if ($errors) {
        json_response(['message' => 'Please fix the highlighted fields.', 'errors' => $errors], 422);
    }

    $statement = db()->prepare(
        'INSERT INTO audit_requests
        (audit_type, name, email, phone, website_url, business_goal, status)
        VALUES
        (:audit_type, :name, :email, :phone, :website_url, :business_goal, :status)'
    );

    $statement->execute([
        ':audit_type' => clean_value($data['audit_type']),
        ':name' => clean_value($data['name']),
        ':email' => clean_value($data['email']),
        ':phone' => clean_value($data['phone']),
        ':website_url' => clean_value($data['website_url']),
        ':business_goal' => clean_value($data['business_goal']),
        ':status' => 'new',
    ]);

    json_response(['message' => 'Audit request saved successfully.'], 201);
}

function handle_collection(string $table, ?string $slug): void
{
    require_method('GET');

    $allowed = [
        'blog_posts' => ['columns' => 'id, title, slug, category, excerpt, content, featured_image, meta_title, meta_description, status, created_at, updated_at'],
        'case_studies' => ['columns' => 'id, title, slug, industry, service, challenge, strategy, execution, results, testimonial, featured_image, created_at, status'],
        'portfolio_items' => ['columns' => 'id, title, slug, category, client_name, description, image, project_url, created_at, status'],
    ];

    if (!isset($allowed[$table])) {
        json_response(['message' => 'Invalid collection.'], 404);
    }

    $columns = $allowed[$table]['columns'];

    if ($slug) {
        $statement = db()->prepare("SELECT {$columns} FROM {$table} WHERE slug = :slug AND status = 'published' LIMIT 1");
        $statement->execute([':slug' => $slug]);
        $item = $statement->fetch();

        if (!$item) {
            json_response(['message' => 'Item not found.'], 404);
        }

        json_response(['data' => $item]);
    }

    $statement = db()->query("SELECT {$columns} FROM {$table} WHERE status = 'published' ORDER BY created_at DESC");
    json_response(['data' => $statement->fetchAll()]);
}
