import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inlinePlugin from "@molgenis/vite-plugin-inline/src/vite-plugin-inline.js"
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), inlinePlugin(), viteStaticCopy({
    targets: [
      {
        src: 'cache.manifest',
        dest: ''
      }
    ]
  })],
  build: {
    rollupOptions: {
      input: ["./index.html", "@molgenis/vite-plugin-inline/src/loader.ts"],
      output: {
        manualChunks: undefined,
      },
    },
  }
})
