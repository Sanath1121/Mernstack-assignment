# Deployment Guide (Vercel + Render)

## Frontend (Vercel)

1. Import the `frontend` folder as a Vercel project.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add environment variable:
   - `VITE_API_BASE_URL=https://<your-render-backend-url>`
6. Deploy.

`frontend/vercel.json` includes SPA rewrites so React Router routes work after refresh.

## Backend (Render)

1. Create a new Web Service from the `backend` folder.
2. Build command: `npm install`.
3. Start command: `npm start`.
4. Add environment variables:
   - `DB_URL=<your-mongodb-connection-string>`
   - `PORT=10000` (optional; Render sets PORT automatically)
   - `CORS_ORIGIN=https://<your-vercel-frontend-url>,http://localhost:5173,http://localhost:5174`
5. Deploy.

Health check endpoint: `/health`

## Local Development

- Backend env template: `backend/.env.example`
- Frontend env template: `frontend/.env.example`

Use localhost defaults if env vars are not set.
