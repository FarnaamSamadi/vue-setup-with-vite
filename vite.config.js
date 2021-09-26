import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`,
      '@view': `${resolve(__dirname, 'src/views')}`
    }
  },
  plugins: [
    vue(),
    eslintPlugin(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'vue-setup',
        short_name: 'vue-setup',
        theme_color: '#ffffff',
        icons: [
          // {
          //   src: '/pwa-192x192.png',
          //   sizes: '192x192',
          //   type: 'image/png'
          // },
          // {
          //   src: '/pwa-512x512.png',
          //   sizes: '512x512',
          //   type: 'image/png'
          // },
          // {
          //   src: '/pwa-512x512.png',
          //   sizes: '512x512',
          //   type: 'image/png',
          //   purpose: 'any maskable'
          // }
        ]
      }
    })
  ]
})
