import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY specifically with a fallback to empty string
      // The specificity here (longer key) usually takes precedence in replacement
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
      // Define process.env as an empty object to polyfill usage in libraries
      // but only if it hasn't been replaced by the more specific key above.
      // NOTE: We wrap this in a way that minimizes conflict.
      'process.env': JSON.stringify({})
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    }
  };
});