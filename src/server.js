import app from './app.js';

const PORT = process.env.PORT || 8080;

app.listen({ port: PORT }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
