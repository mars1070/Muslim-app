import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env': {
          ...env,
          NODE_ENV: JSON.stringify(mode)
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: !isProduction,
        emptyOutDir: true,
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html')
          },
          output: {
            entryFileNames: 'assets/[name].[hash].js',
            chunkFileNames: 'assets/[name].[hash].js',
            assetFileNames: 'assets/[name].[hash][extname]',
            manualChunks: {
              vendor: ['react', 'react-dom']
            }
          }
        }
      },
      resolve: {
        alias: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
          { find: '~', replacement: path.resolve(__dirname) }
        ]
      }
    };
});
