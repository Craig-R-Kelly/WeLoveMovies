function methodNotAllowed(req, res, next) {
  const errorMessage = `${req.method} not allowed for ${req.originalUrl}`;
  console.log(errorMessage);
  next({
    status: 405,
    message: errorMessage,
  });
}

module.exports = methodNotAllowed;
