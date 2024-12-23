import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig(async () => {
  const tsconfigPaths = (await import('vite-tsconfig-paths')).default;

  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: 'happy-dom',
      include: ['**/*.test.{ts,tsx}'],
      globals: true,
      setupFiles: ['./vitest-setup.ts'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
