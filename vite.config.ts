import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY specifically
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Polyfill process.env to prevent "process is not defined" error in browser
      'process.env': {}
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    }
  };
});