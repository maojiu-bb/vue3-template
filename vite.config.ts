import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Add Element-Plus auto import plugin
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],

  // Add a path alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  // Your can change the env prefix here
  envPrefix: 'VITE',

  // Configure the proxy service
  server: {
    port: 8000,
    proxy: {
      '/api': {
        // The target change to your own server address
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
