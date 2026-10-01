const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const Admin = require("../models/Admin.model");

const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw ApiError.unauthorized("Authentication required. Please log in.");
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.clearCookie("token");
    throw error;
  }

  const admin = await Admin.findById(decoded.id);

  if (!admin) {
    throw ApiError.unauthorized("Admin no longer exists");
  }

  if (!admin.activeStatus) {
    throw ApiError.forbidden("Admin account is inactive");
  }

  req.admin = admin;
  next();
});

const requireSuperadmin = (req, res, next) => {
  if (req.admin?.role !== "superadmin") {
    return res.status(403).json({ success: false, message: "Superadmin access required" });
  }
  next();
};

module.exports = authMiddleware;
module.exports.requireSuperadmin = requireSuperadmin;