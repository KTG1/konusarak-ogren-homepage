import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        istanbulCourse: resolve(import.meta.dirname, 'istanbul-ingilizce-kursu.html'),
      },
    },
  },
})
