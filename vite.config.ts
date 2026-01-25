import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const port = Number(env.PORT || env.VITE_PORT || 3001);
  const previewPort = Number(env.VITE_PREVIEW_PORT || 4173);
  const base = env.VITE_BASE_PATH || '/';

  return {
    base,
    plugins: [react()],
    // Use dual-stack to avoid localhost IPv6/IPv4 mismatches on Windows.
    server: {
      host: '::',
      port,
      strictPort: true,
    },
    preview: {
      host: '::',
      port: previewPort,
      strictPort: true,
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    css: {
      postcss: 'postcss.config.js',
    },
  };
});
