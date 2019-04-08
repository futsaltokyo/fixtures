const fs = require('fs');
const express = require('express');
const openapi = require('express-openapi');

const config = require('./config');
const errorMiddleware = require('./middlewares/error');

const app = express();

openapi.initialize({
  apiDoc: fs.readFileSync(config.openAPI.doc, 'utf-8'),
  docsPath: '/docs',
  app,
  promiseMode: true,
  paths: config.openAPI.routes,
  errorTransformer: openApiError => ({
    status: 400, message: openApiError.message,
  }),
  errorMiddleware,
});

module.exports = app;