import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // '/SebMarasa/' sur GitHub Pages (défini par le workflow), '/' en local et avec un domaine custom
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
