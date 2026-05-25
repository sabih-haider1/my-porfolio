import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmail } from './server/contactMailer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'contact-form-dev-endpoint',
      configureServer(server) {
        server.middlewares.use(async (req: any, res: any, next: any) => {
          if (req.url !== '/api/contact') {
            return next();
          }

          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

          if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.end();
            return;
          }

          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Method not allowed' }));
            return;
          }

          let rawBody = '';
          req.on('data', (chunk: string) => {
            rawBody += chunk;
          });

          req.on('end', async () => {
            try {
              const payload = JSON.parse(rawBody || '{}');
              await sendContactEmail(payload);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
            } catch (error) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to send email.' }));
            }
          });
        });
      },
    },
  ],
})
