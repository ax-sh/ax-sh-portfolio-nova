// export default eslintConfig;
import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import eslintPrettierWithPluginConfig from './eslint.prettier.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...eslintPrettierWithPluginConfig,
];

export default antfu(
  {
    extends: ['next/core-web-vitals', 'next/typescript'],
    // react: true,
    test: true,
    lessOpinionated: true,
    typescript: true,
    formatters: { prettierOptions: { printWidth: 80 } },
  },
  // eslintConfig
  {
    // Without `files`, they are general rules for all files
    rules: {
      'style/semi': ['off', 'never'],
    },
  }
);
