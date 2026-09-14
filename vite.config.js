import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const pagina = (arquivo) => fileURLToPath(new URL(arquivo, import.meta.url));

export default defineConfig(({ command }) => ({
  // Só entra em vigor no build de publicação (GitHub Pages fica numa
  // subpasta); o dev local e o Tailscale Funnel continuam na raiz.
  base: command === 'build' ? '/site-weknow/' : '/',
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
}));
