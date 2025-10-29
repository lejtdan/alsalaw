import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    port: 4321,
    host: true, // ← NUEVO: Permite conexiones externas
  },
  integrations: [tailwind()],
  output: 'static',

  // ← NUEVO: Configuración de Vite para ngrok
  vite: {
    server: {
      host: true,
      allowedHosts: 'all',
    },
  },
});
