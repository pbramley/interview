import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import checker from 'vite-plugin-checker'; // 👈 import the plugin

export default defineConfig({
   plugins: [
      react(),
      checker({ typescript: true }), // 👈 enables type checking
   ],
   resolve: {
      alias: {
         '@components': path.resolve(__dirname, './src/components'),
         '@pages': path.resolve(__dirname, './src/pages'),
         '@utils': path.resolve(__dirname, './src/utils'),
         '@services': path.resolve(__dirname, './src/services'),
         '@hooks': path.resolve(__dirname, './src/hooks'),
         '@context': path.resolve(__dirname, './src/context'),
      },
   },
});
