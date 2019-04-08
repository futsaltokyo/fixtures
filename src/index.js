const config = require('./config');
const app = require('./app');

function runner() {
  const server = app.listen(config.port, () => {
    logger.info(`Fixtures running on http://localhost:${config.port}`);
  });

  process.on('SIGTERM', () => {
    // Stop accepting new HTTP requests...
    process.exit(1);
  });
}

runner();
