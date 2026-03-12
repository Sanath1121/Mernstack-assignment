Create new react app:

    npm create vite@latest

    clear app.css, index.css


Install tailwind css:
    npm install tailwindcss @tailwindcss/vite


Correction step (if Tailwind classes are not applying):
        In vite.config.js add:

        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
            plugins: [react(), tailwindcss()],
        })

        Also keep this in src/index.css:
        @import "tailwindcss";

        Then restart dev server:
        npm run dev