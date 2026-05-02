import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export const config = defineConfig(eslint.configs.recommended, tseslint.configs.strictTypeChecked, {
  name: 'erwanjugand/base',
  rules: {
    // Strictness JS
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'block-scoped-var': 'error',
    camelcase: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    eqeqeq: 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-object-constructor': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-return': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',

    // Lax TS
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],

    // Override  TS
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],

    // Strictness TS
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      parser: tseslint.parser,
    },
  },
})
