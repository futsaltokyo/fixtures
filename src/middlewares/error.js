// eslint-disable-next-line no-unused-vars
async function handleError(err, req, res, next) {
  let msg = err.message;
  const { code } = err; // can be undefined

  const hasOpenAPIValidationErrors = err.errors;

  if (hasOpenAPIValidationErrors) {
    // err.errors contains list of open API validation failures, if any
    msg = err.errors.map(e => e.message).join('\n');
  }
  return res.status(err.status).json({ code, message: msg });
}

module.exports = handleError;
