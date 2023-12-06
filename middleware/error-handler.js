const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({
    success: false,
    msg: err,
  });
};

module.exports = errorHandlerMiddleware;
