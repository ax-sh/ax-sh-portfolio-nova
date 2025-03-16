import type { UserWorkspaceConfig } from 'vitest/node';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig(async () => {
  const tsconfigPaths = (await import('vite-tsconfig-paths')).default;
  const config = {
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: 'happy-dom',
      include: ['**/*.test.{ts,tsx}'],
      exclude: ['node_modules', '**/*.spec.{ts,tsx}'],
      globals: true,
      setupFiles: ['./vitest-setup.ts'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  } as UserWorkspaceConfig;
  return config;
});
