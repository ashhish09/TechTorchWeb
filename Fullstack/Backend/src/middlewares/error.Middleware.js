const ApiError = require("../utils/ApiError");

const errorMiddleware = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    let statusCode = error.statusCode || 500;
    let message = error.message || "Internal Server Error";
    let errors = [];

    if (error.name === "ValidationError") {
      statusCode = 400;
      errors = Object.values(error.errors).map((e) => e.message);
      message = "Validation failed";
    } else if (error.name === "CastError") {
      statusCode = 400;
      message = `Invalid value for field "${error.path}"`;
    } else if (error.code === 11000) {
      statusCode = 409;
      const field = Object.keys(error.keyValue || {})[0];
      message = field
        ? `${field} "${error.keyValue[field]}" already exists`
        : "Duplicate field value";
    } else if (error.name === "JsonWebTokenError") {
      statusCode = 401;
      message = "Invalid token";
    } else if (error.name === "TokenExpiredError") {
      statusCode = 401;
      message = "Token has expired, please log in again";
    }

    error = new ApiError(statusCode, message, errors, err.stack);
  }

  if (error.statusCode >= 500) {
    console.error(err);
  } else {
    console.error(`[${error.statusCode}] ${error.message}`);
  }

  const response = {
    success: false,
    statusCode: error.statusCode,
    message: error.message,
    ...(error.errors?.length > 0 && { errors: error.errors }),
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  };

  return res.status(error.statusCode).json(response);
};

module.exports = errorMiddleware;