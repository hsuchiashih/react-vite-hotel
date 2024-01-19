import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@': 'src'
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/react-vite-hotel/' : '/',
  plugins: [react()]
})
