import { baseConfig, vueConfig } from '@erwanjugand/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig(baseConfig, vueConfig, {
  ignores: ['dist'],
})
