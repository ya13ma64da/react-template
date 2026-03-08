import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import generouted from "@generouted/react-router/plugin"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    generouted()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
