# Backend — User Management API

This folder contains Vercel serverless functions (under `api/`) using Mongoose to talk to MongoDB Atlas.

Prerequisites
- Node 18+ and npm
- MongoDB Atlas connection string

Quick start (local)
- Install: `npm install`
- Copy `.env.example` to `.env` and set:
  - `DB_URL` — MongoDB connection URI
  - `CORS_ORIGIN` — comma-separated allowed origins (example: `https://your-frontend.vercel.app`)
- Recommended local dev: install Vercel CLI and run `vercel dev` from this `backend` folder to emulate serverless functions.

Run
- `vercel dev` — runs functions locally

Deploy (Vercel)
- Create a Vercel project for the backend, point to this `backend` folder (or use monorepo settings).
- Ensure environment variables `DB_URL` and `CORS_ORIGIN` are set in the Vercel dashboard.

Notes & Troubleshooting
- CORS: serverless handlers send `Access-Control-Allow-*` headers; if you see preflight failures, verify `CORS_ORIGIN` matches the frontend domain exactly (no trailing slash).
- If functions return 500, check Vercel function logs and confirm `DB_URL` is correct and the database allows connections from Vercel.
