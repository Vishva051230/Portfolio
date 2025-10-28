import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use a dynamic base so the site works on Vercel (root) and still supports
  // GitHub Pages deployment under /Portfolio/ when not deployed to Vercel.
  base: process.env.VERCEL ? '/' : '/Portfolio/'
})