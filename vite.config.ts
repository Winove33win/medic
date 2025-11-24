import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Define process.env to an empty object to prevent "process is not defined" errors in browser
      'process.env': {}
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    }
  };
});