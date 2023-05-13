// import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    devSourcemap: true
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        splash: './src/views/splash/splash.html',
        intro: './src/views/intro/intro.html',
        intro: './src/views/final/final.html',
      }
    }
  }
})
