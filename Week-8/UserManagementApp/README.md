# User Management App

A simple MERN-stack application to manage a list of users. You can add users, view all registered users in a directory, and click on individual users to see their details, edit, or delete them.

It's set up as a monorepo containing a React/Vite frontend and an Express/Mongoose backend.

## Quick Start

### 1. Backend Setup
1. Go to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create a `.env` file based on `.env.example`:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/usermanagement
   ```
3. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```

### 2. Frontend Setup
1. Go to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server (usually runs on http://localhost:5173):
   ```bash
   npm run dev
   ```

---

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, React Router, React Hook Form
- **Backend**: Node.js, Express, MongoDB (Mongoose)

## Sub-project Details

For more details on deployment configurations, environment variables, or API endpoints, check out the specific READMEs:
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

## Deployment link:

https://usermanagement-frontend-seven.vercel.app

