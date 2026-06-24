# Selmore Digital Website

Premium React/Vite frontend with a PHP 8+ REST API and MySQL schema for Selmore Digital.

## Stack

- React, Vite, React Router, Tailwind CSS, Framer Motion, Axios, Lucide React
- PHP 8+ REST API with PDO prepared statements
- MySQL database schema for leads, blog posts, case studies, and portfolio items

## Frontend Setup

```bash
npm install
npm run dev
```

The Vite app runs at `http://localhost:5173`.

Create a local `.env` if your PHP API runs somewhere other than the Vite proxy target:

```bash
cp .env.example .env
```

## Backend Setup

1. Create a MySQL database and import `backend/database/schema.sql`.
2. Copy `backend/.env.example` to `backend/.env` and update the database credentials.
3. Start the PHP API:

```bash
php -S localhost:8000 -t backend/public
```

The frontend dev server proxies `/api` requests to `http://localhost:8000`.

## API Endpoints

- `GET /api/csrf-token`
- `POST /api/contact`
- `POST /api/book-consultation`
- `POST /api/audit-request`
- `GET /api/blogs`
- `GET /api/blogs/{slug}`
- `GET /api/case-studies`
- `GET /api/case-studies/{slug}`
- `GET /api/portfolio`
- `GET /api/portfolio/{slug}`

POST endpoints require the `X-CSRF-Token` header returned by `/api/csrf-token`.

## Production Notes

- Point your web server document root at `backend/public` for the PHP API.
- Build the frontend with `npm run build` and deploy the `dist/` folder.
- Set `VITE_API_URL` to the production API URL if the frontend and API are deployed separately.
