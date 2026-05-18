# Backend — User Management API

A serverless REST API built with Express.js and MongoDB for managing user data. Runs on Vercel's serverless infrastructure with optimized cold start performance.

## Prerequisites

- **Node.js** version 18 or higher
- **npm** (comes with Node.js)
- **MongoDB Atlas** account with a database cluster
- **Vercel CLI** (optional, for local development with `vercel dev`)

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   - Copy `.env.example` to `.env`
   - Set the following environment variables:
     - `DB_URL` — Your MongoDB Atlas connection string (e.g., `mongodb+srv://username:password@cluster.mongodb.net/database`)
     - `CORS_ORIGIN` — Comma-separated list of allowed frontend origins (e.g., `http://localhost:5173,https://your-frontend.vercel.app`)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with nodemon (auto-reloads on file changes) |
| `npm start` | Start the server in production mode |
| `npm run build` | Build script (no build step for serverless functions) |
| `npm test` | Run tests (not yet implemented) |

## Dependencies

### Production Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^5.2.1 | Web framework for REST API |
| `mongoose` | ^9.2.3 | MongoDB object modeling and validation |
| `cors` | ^2.8.6 | Cross-Origin Resource Sharing middleware |
| `dotenv` | ^17.4.2 | Environment variable management |

### Development Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `nodemon` | ^3.1.14 | Auto-restart server on file changes |

## Local Development

### Using Express directly

```bash
# Terminal setup
cd backend
npm install
npm run dev
```

The server runs on `http://localhost:3000`

### Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Run local development server
vercel dev
```

This emulates the serverless environment more closely and runs on `http://localhost:3000`

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/health` | GET | Health check endpoint |
| `/user-api/users` | GET | Get all users |
| `/user-api/users` | POST | Create a new user |
| `/user-api/users/:id` | GET | Get a specific user |
| `/user-api/users/:id` | PUT | Update a user |
| `/user-api/users/:id` | DELETE | Delete a user |

## Deployment on Vercel

### Initial Setup

1. Create a new Vercel project at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Select the backend folder as the root directory
4. Configure project settings:
   - **Root Directory:** `backend`
   - **Node Version:** 18 or higher (auto-detected)

### Environment Variables

Add the following environment variables in the Vercel dashboard:

| Key | Value | Example |
|-----|-------|---------|
| `DB_URL` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `CORS_ORIGIN` | Frontend URL(s) | `https://your-frontend.vercel.app` |

### Deployment Process

1. Push changes to your GitHub repository
2. Vercel automatically triggers a build
3. Review deployment logs for any errors
4. Access your API at `https://<your-project>.vercel.app`

### Vercel Configuration

The `vercel.json` file routes requests to serverless functions:

```json
{
  "routes": [
    { "src": "/", "dest": "/api/index" },
    { "src": "/user-api/(.*)", "dest": "/api/user-api/$1" },
    { "src": "/health", "dest": "/api/health" }
  ]
}
```

## Project Structure

```
backend/
├── api/
│   ├── index.js              # Default endpoint handler
│   ├── health.js             # Health check handler
│   ├── userAPI.js            # Main user API handler
│   └── user-api/
│       ├── users.js          # GET/POST /user-api/users
│       └── [id].js           # GET/PUT/DELETE /user-api/users/:id
├── APIs/
│   └── UserAPI.js            # User API logic (deprecated)
├── models/
│   └── userModel.js          # Mongoose user schema
├── server.js                 # Express server configuration
├── package.json              # Dependencies and scripts
├── vercel.json              # Vercel routing configuration
└── README.md                # This file
```

## Troubleshooting

### MongoDB Connection Error
- Verify `DB_URL` is correct and not expired
- Check that your MongoDB Atlas cluster is running
- Ensure Vercel IP is whitelisted in MongoDB Atlas network access (allow all: `0.0.0.0/0`)
- Test connection locally before deploying

### CORS Errors
- Confirm `CORS_ORIGIN` matches the frontend URL exactly (case-sensitive, no trailing slash)
- If using multiple origins, separate them with commas
- For local development, include `http://localhost:5173`

### 500 Errors in Production
- Check Vercel function logs in the project dashboard
- Verify environment variables are set correctly
- Ensure MongoDB connection is stable
- Check error messages in Vercel logs

### Cold Start Performance
- First request to serverless functions may take 1-2 seconds (cold start)
- Subsequent requests are faster (warm start)
- Consider keeping the application warm with periodic pings

## Testing the API

Use tools like Postman, VS Code REST Client, or cURL to test endpoints:

```bash
# Health check
curl http://localhost:3000/health

# Get all users
curl http://localhost:3000/user-api/users

# Create a user
curl -X POST http://localhost:3000/user-api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'
```

## Support

For general application information, see the [main README](../README.md).
For frontend documentation, see the [frontend README](../frontend/README.md).
