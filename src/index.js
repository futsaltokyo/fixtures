const config = require('./config');
const app = require('./app');

function runner() {
  app.listen(config.port, () => {
    // TODO: logging
  });

  process.on('SIGTERM', () => {
    // Stop accepting new HTTP requests...
    process.exit(1);
  });
}

runner();
