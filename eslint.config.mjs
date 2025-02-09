import nextPlugin from '@next/eslint-plugin-next';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@next/next': nextPlugin
    },
    parser: typescriptParser,
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-img-element': 'warn'
    }
  }
];
