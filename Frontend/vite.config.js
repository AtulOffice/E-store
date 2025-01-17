import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dotenv from 'dotenv'

dotenv.config({
  path : './.env'
})

export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: `${process.env.VITE_BACKEND_URL}`, 
        changeOrigin: true,
        secure: false,
      },
    },
  },

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
})
