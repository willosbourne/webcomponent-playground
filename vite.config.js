import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // Determine which app is being built/served based on the mode
  const input = mode === 'vanilla' 
    ? resolve(__dirname, 'vanilla-js/index.html')
    : mode === 'react'
      ? resolve(__dirname, 'react-app/index.html')
      : mode === 'svelte'
        ? resolve(__dirname, 'svelte-app/index.html')
        : mode === 'angular'
          ? resolve(__dirname, 'angular-app/index.html')
          : {
              vanilla: resolve(__dirname, 'vanilla-js/index.html'),
              react: resolve(__dirname, 'react-app/index.html'),
              svelte: resolve(__dirname, 'svelte-app/index.html'),
              angular: resolve(__dirname, 'angular-app/index.html'),
            };

  return {
    plugins: [
      react(),
      svelte(),
    ],
    build: {
      rollupOptions: {
        input,
      },
    },
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.json'],
    },
    optimizeDeps: {
      include: [
        'react', 
        'react-dom',
        '@angular/core',
        '@angular/common',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic'
      ],
    },
  };
});
