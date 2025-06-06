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

  // Special configuration for Angular
  const angularConfig = mode === 'angular' ? {
    // Ensure Angular compiler is properly handled
    define: {
      'ngDevMode': 'false',
      'ngJitMode': 'true',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    },
    // Ensure Angular packages are properly processed
    optimizeDeps: {
      include: [
        '@angular/compiler',
        '@angular/core',
        '@angular/common',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/platform-browser/animations'
      ],
      // Don't exclude Angular packages
      exclude: []
    },
    // Ensure TypeScript files are properly processed
    esbuild: {
      // Handle Angular-specific syntax
      target: 'es2020',
      include: /\.(js|ts|tsx)$/
    }
  } : {};

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
      // Ensure Angular packages are properly resolved
      mainFields: ['module', 'main', 'browser']
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
    // Merge in Angular-specific configuration when in Angular mode
    ...angularConfig
  };
});
