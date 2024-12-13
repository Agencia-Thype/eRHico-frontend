import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Pasta de saída
    assetsDir: 'assets', // Pasta para arquivos estáticos
    rollupOptions: {
      output: {
        assetFileNames: 'assets/img/[name].[hash].[ext]', // Inclui as imagens no build
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para facilitar os imports
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Inclui arquivos de imagem
});
