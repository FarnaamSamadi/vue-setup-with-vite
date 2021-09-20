import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`,
      '@view': `${resolve(__dirname, 'src/views')}`
    }
  },
  plugins: [vue(), eslintPlugin()]
})
