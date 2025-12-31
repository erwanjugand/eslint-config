import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export const config = defineConfig(eslint.configs['recommended'], tseslint.configs['strict'], {
  name: 'erwanjugand/base',
  rules: {
    // Override eslint
    // OVerride typescript-eslint
  },
})
