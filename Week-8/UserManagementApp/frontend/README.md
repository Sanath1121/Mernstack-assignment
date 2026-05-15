# Frontend — UserManagementApp

Brief React + Vite frontend for the User Management App.

Prerequisites
- Node 18+ and npm

Quick start (local)
- Install: `npm install`
- Create env: copy `.env.example` to `.env.local` and set `VITE_API_BASE_URL` (no trailing slash)
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview production build: `npm run preview`

Deployment (Vercel)
- Set Vercel project to this repository's `frontend` folder (or connect via monorepo settings).
- Output directory: `dist`
- Add environment variable `VITE_API_BASE_URL` pointing to your backend URL (e.g. `https://<your-backend>.vercel.app`)

Notes
- If you see CORS errors in the browser, confirm the backend `CORS_ORIGIN` includes the frontend domain (no trailing slash).
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
