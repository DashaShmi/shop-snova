import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import vsharp from 'vite-plugin-vsharp';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: false
  },
  base: mode === 'production' ? '/' : '/',
  plugins: [
    vsharp({
      height: 1000, // Maximum width (won't upscale smaller images)
    }),
    react()
  ],

}))
