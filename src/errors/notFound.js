function notFound(req, res, next) {
  const errorMessage = `Path not found: ${req.originalUrl}`;
  console.log(errorMessage);
  next({ status: 404, message: errorMessage });
}

module.exports = notFound;