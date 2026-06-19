import Fastify from 'fastify';

const app = Fastify({ logger: true });

// 👋 Welcome! Add your routes below.
app.get('/', async () => {
  return { message: 'Hello from Fastify!' };
});

export default app;
