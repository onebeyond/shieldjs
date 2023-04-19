/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import {configDefaults} from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    exclude: [...configDefaults.exclude, 'src/e2e'],
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: 'html',
      reportsDirectory: './tests/unit/coverage'
    },
  },
  envPrefix:'REACT_APP',
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
