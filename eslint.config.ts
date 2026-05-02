import prettierConfig from 'eslint-config-prettier/flat'
import { defineConfig } from 'eslint/config'

import { baseConfig } from './src/index'

export default defineConfig(baseConfig, prettierConfig, { ignores: ['dist'] })
