# Frontend — User Management App

A modern React + Vite-based single-page application for user management with responsive design and real-time updates.

## Prerequisites

- **Node.js** version 18 or higher
- **npm** (comes with Node.js)

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   - Copy `.env.example` to `.env.local`
   - Set `VITE_API_BASE_URL` to your backend URL
     - **Local development:** `http://localhost:3000` (when using `vercel dev`)
     - **Production:** Your deployed backend URL (e.g., `https://your-backend.vercel.app`)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot module reloading |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Dependencies

### Production Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.2.0 | Core React library |
| `react-dom` | ^19.2.0 | React DOM rendering |
| `react-router` | ^7.13.1 | Client-side routing |
| `react-hook-form` | ^7.75.0 | Form state management |
| `tailwindcss` | ^4.2.1 | Utility-first CSS framework |
| `@tailwindcss/vite` | ^4.2.1 | Vite plugin for Tailwind CSS |

### Development Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^7.3.1 | Build tool and dev server |
| `@vitejs/plugin-react` | ^5.1.1 | Vite plugin for React |
| `eslint` | ^9.39.1 | Code linting |
| `@eslint/js` | ^9.39.1 | ESLint configuration |
| `eslint-plugin-react-refresh` | ^0.4.24 | ESLint plugin for React |
| `eslint-plugin-react-hooks` | ^7.0.1 | ESLint plugin for React hooks |
| `@types/react` | ^19.2.7 | React TypeScript types |
| `@types/react-dom` | ^19.2.3 | React DOM TypeScript types |
| `globals` | ^16.5.0 | Global scope variables |

## Deployment on Vercel

### Setup

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Create a new project and select the repository
3. Configure the project settings:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install` (default)

### Environment Variables

Add the following environment variable in the Vercel dashboard:

- **Key:** `VITE_API_BASE_URL`
- **Value:** Your deployed backend URL (e.g., `https://your-backend.vercel.app`)

### Deployment Process

1. Push changes to your GitHub repository
2. Vercel automatically detects changes and triggers a build
3. Review the deployment preview
4. Merge to main branch for production deployment

## Project Structure

```
frontend/
├── src/
│   ├── components/        # React components
│   ├── config/           # Configuration files (API endpoint, etc.)
│   ├── assets/           # Images and static assets
│   ├── App.jsx           # Main App component
│   ├── App.css           # Application styles
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── public/               # Static files
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment config
└── README.md            # This file
```

## Troubleshooting

### CORS Errors
If you see CORS errors in the browser:
- Verify that the backend's `CORS_ORIGIN` environment variable includes your frontend domain
- Ensure the URL has no trailing slash
- Confirm the backend is running and accessible

### Blank Page After Deployment
- Check the browser console for errors
- Verify `VITE_API_BASE_URL` is correctly set in Vercel environment variables
- Ensure the backend API is running and accessible

### Port Already in Use (Local Development)
- Kill the process using port 5173
- Or configure a different port in `vite.config.js`

## Support

For general application information, see the [main README](../README.md).
For backend documentation, see the [backend README](../backend/README.md).
