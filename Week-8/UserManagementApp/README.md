# UserManagementApp (Blogg-app)

Monorepo for the User Management App. Contains a React + Vite frontend and a Vercel serverless backend (Mongoose + MongoDB).

Repository layout
- `frontend/` — React + Vite SPA
- `backend/` — Vercel serverless functions under `backend/api/`

Local development
1. Backend (in terminal A)
   - `cd backend`
   - `npm install`
   - Copy `.env.example` → `.env` and set `DB_URL`, `CORS_ORIGIN`
   - `vercel dev` (requires `vercel` CLI and login)

2. Frontend (in terminal B)
   - `cd frontend`
   - `npm install`
   - Copy `.env.example` → `.env.local` and set `VITE_API_BASE_URL` to the backend URL (for local dev `http://localhost:3000` when using `vercel dev`)
   - `npm run dev`

Deployment
- Deploy frontend and backend separately to Vercel (two projects), or configure monorepo deployment.
- Ensure Vercel environment variables are set for both projects:
  - Backend: `DB_URL`, `CORS_ORIGIN`
  - Frontend: `VITE_API_BASE_URL`

Common issues
- CORS preflight failures: ensure `CORS_ORIGIN` includes the exact frontend origin and has no trailing slash.
- 401/Authentication pages: if a backend deployment returns Vercel auth page, remove project protection or use a bypass token during testing.

Want more?
- I can add run scripts, a CONTRIBUTING.md, or a `make`/script to run both services locally. Tell me which you'd prefer.
