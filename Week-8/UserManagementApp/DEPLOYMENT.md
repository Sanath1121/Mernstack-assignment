# Deployment Guide (Vercel + Render)

## Frontend (Vercel)

1. Import the `frontend` folder as a Vercel project.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add environment variable:
   - `VITE_API_BASE_URL=https://<your-backend-vercel-url>`
6. Deploy.

`frontend/vercel.json` includes SPA rewrites so React Router routes work after refresh.

## Backend (Vercel serverless functions)

This project now exposes the backend as Vercel serverless functions from the `backend` folder. Functions are available under `/user-api/*` (rewritten to `/api/user-api/*`).

1. Import the `backend` folder as a separate Vercel project (or as a monorepo root with configured `scope`).
2. Vercel will deploy serverless functions found under `backend/api`.
3. Add environment variables in Vercel for the backend project:
   - `DB_URL` = your MongoDB connection string
   - `CORS_ORIGIN` = comma-separated allowed origins (example: `https://your-frontend.vercel.app,http://localhost:5173`)
4. No long-running `start` process is required; functions run on demand.

Health check endpoint: `/health`

## Local Development

- Backend env template: `backend/.env.example`
- Frontend env template: `frontend/.env.example`

Use localhost defaults if env vars are not set.
