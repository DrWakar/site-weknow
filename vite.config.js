import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const pagina = (arquivo) => fileURLToPath(new URL(arquivo, import.meta.url));

export default defineConfig({
  server: {
    port: 5173,
    open: false,
    host: true,
    allowedHosts: ['desktop-c43fk50.tailb69093.ts.net'],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: pagina('./index.html'),
        cases: pagina('./cases.html'),
      },
    },
  },
});
