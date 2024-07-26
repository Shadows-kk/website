import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), AutoImport({
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    imports: [
      // 插件预设支持导入的api
      'vue',
      'vue-router',
      '@vueuse/core'
    ],
    // Enable auto import by filename for default module exports under directories
    // defaultExportByFilename: false,
    dirs: [
      './src/hooks',
      './src/components' // all nested modules
    ]
  }),],
  resolve: {
    extensions: ['.js', '.json', '.vue', '.jsx', '.tsx', '.ts'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@api': path.resolve(__dirname, 'src/service/api'),
      '@pinia': path.resolve(__dirname, 'src/pinia'),
      '@common': path.resolve(__dirname, 'src/components/common')
    }
  },
})
