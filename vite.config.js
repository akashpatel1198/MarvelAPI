import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';

export default defineConfig({
  esbuild: {
    loader: "jsx",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      },
    },
  },
  server: {
    port: 8080
  },
  plugins: [react()]
});