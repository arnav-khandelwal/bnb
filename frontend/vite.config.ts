import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['bnb-o6xv.onrender.com'],
    port: 3000  // or any port you prefer
  },
  
  preview: {
    host: '0.0.0.0',
    port: 3000  // or any port you prefer
  }
})