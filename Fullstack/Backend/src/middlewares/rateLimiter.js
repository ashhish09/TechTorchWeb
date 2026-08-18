const rateLimit = require("express-rate-limit");
const ApiError = require("../utils/ApiError");

const handler = (req, res, next, options) => {
  next(new ApiError(429, "Too many requests, please try again later"));
};

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  handler,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: "Too many attempts, please try again after 15 minutes",
  handler,
});

const otpLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  handler,
});

module.exports = { generalLimiter, authLimiter, otpLimiter };