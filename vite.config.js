import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser'; // Import terser for minification

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    terser(),
  ],
  build: {
    minify: true,
    manifest: true,
    sourcemap: false,
  },
});
