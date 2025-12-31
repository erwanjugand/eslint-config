import { defineConfig } from 'eslint/config'
import vueConfig from 'eslint-plugin-vue'

export const config = defineConfig(vueConfig.configs['flat/recommended'], {
  name: 'erwanjugand/vue',
  files: ['**/*.vue'],
  rules: {
    // Override
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/multi-word-component-names': 'off',

    // Uncategorized
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
        style: {
          lang: 'scss',
        },
      },
    ],
    'vue/block-tag-newline': 'error',
    'vue/component-api-style': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/component-options-name-casing': 'error',
    'vue/custom-event-name-casing': 'error',
    'vue/define-emits-declaration': 'error',
    'vue/define-macros-order': 'error',
    'vue/define-props-declaration': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-duplicate-class-names': 'error',
    'vue/no-import-compiler-macros': 'error',
    'vue/no-unused-emit-declarations': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-define-options': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/prefer-use-template-ref': 'error',
    'vue/require-macro-variable-name': 'error',
    'vue/require-typed-ref': 'error',
  },
})
