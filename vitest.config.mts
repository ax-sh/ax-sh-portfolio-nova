import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vitest/config';
import { UserWorkspaceConfig } from 'vitest/node';

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
