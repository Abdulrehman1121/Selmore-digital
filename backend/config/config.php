<?php

function app_env(string $key, mixed $default = null): mixed
{
    static $loaded = false;
    static $values = [];

    if (!$loaded) {
        $path = dirname(__DIR__) . DIRECTORY_SEPARATOR . '.env';
        if (is_file($path)) {
            $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                $line = trim($line);
                if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
                    continue;
                }
                [$name, $value] = explode('=', $line, 2);
                $values[trim($name)] = trim($value, " \t\n\r\0\x0B\"'");
            }
        }
        $loaded = true;
    }

    $serverValue = getenv($key);
    if ($serverValue !== false) {
        return $serverValue;
    }

    return $values[$key] ?? $default;
}
