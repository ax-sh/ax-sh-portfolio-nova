import type { KnipConfig } from 'knip';

/**
 * knip is a tool for discovering dead code:
 * https://knip.dev/
 * https://knip.dev/reference/dynamic-configuration
 * To use: `bun knip`
 */
const config: KnipConfig = {
  ignore: ['src/services/pdf'],
  next: {
    entry: [
      'next.config.{js,ts,cjs,mjs}',
      '{instrumentation,middleware}.{js,ts}',
      'app/global-error.{js,jsx,ts,tsx}',
      'app/**/{error,layout,loading,not-found,page,template,default}.{js,jsx,ts,tsx}',
      'app/**/route.{js,jsx,ts,tsx}',
      'app/{manifest,sitemap,robots}.{js,ts}',
      'app/**/{icon,apple-icon}.{js,jsx,ts,tsx}',
      'app/**/{opengraph,twitter}-image.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      'src/{instrumentation,middleware}.{js,ts}',
      'src/app/global-error.{js,jsx,ts,tsx}',
      'src/app/**/{error,layout,loading,not-found,page,template,default}.{js,jsx,ts,tsx}',
      'src/app/**/route.{js,jsx,ts,tsx}',
      'src/app/{manifest,sitemap,robots}.{js,ts}',
      'src/app/**/{icon,apple-icon}.{js,jsx,ts,tsx}',
      'src/app/**/{opengraph,twitter}-image.{js,jsx,ts,tsx}',
      'src/pages/**/*.{js,jsx,ts,tsx}',
    ],
  },
  vitest: {
    config: [
      'vitest.config.{js,mjs,ts,cjs,mts,cts}',
      'vitest.{workspace,projects}.{js,mjs,ts,cjs,mts,cts,json}',
    ],
    entry: ['**/*.{bench,test,test-d,spec}.?(c|m)[jt]s?(x)'],
  },
  vite: {
    config: ['vite.config.{js,mjs,ts,cjs,mts,cts}'],
  },
  tailwind: {
    entry: ['tailwind.config.{js,cjs,mjs,ts}'],
  },
  postcss: {
    config: [
      'package.json',
      'postcss.config.json',
      '.postcssrc',
      '.postcssrc.{json,js,cjs,mjs,ts,mts,cts,yaml,yml}',
      'postcss.config.{js,cjs,mjs,ts,mts,cts,mjs}',
    ],
  },
  ignoreDependencies: [
    '@storybook/react',
    '@testing-library/jest-dom',
    'is-ci',
    '@biomejs/biome',
    'git-cliff',
    'eslint-.*',
    'vite',
  ],
  ignoreBinaries: ['rimraf', 'nlx', 'nr', 'act', 'storybook'],
  rules: {
    binaries: 'warn',
    unresolved: 'warn',
  },
};
export default config;
