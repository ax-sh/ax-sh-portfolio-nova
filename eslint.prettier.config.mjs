import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

// eslint-config-prettier: Disables ESLint rules that conflict with Prettier.
// eslint-plugin-prettier: Integrates Prettier directly into ESLint as a rule (prettier/prettier).

export default tseslint.config({
  extends: [
    eslintConfigPrettier, // Turns off all rules that are unnecessary or might conflict with Prettier.
    eslintPluginPrettierRecommended,
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
      },
    ], // Enforce Prettier formatting
  },
});
