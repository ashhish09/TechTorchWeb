const mongoose = require("mongoose");
const Admin = require("../models/Admin.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const { cookieOptions } = require("../utils/generateToken");

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, contact, emergency, email, password } = req.body;

  if (!contact || !emergency || !email || !password) {
    throw ApiError.badRequest("All fields are required");
  }

  const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
  if (existingAdmin) {
    throw ApiError.conflict("Admin already exists with this email");
  }

  const admin = await Admin.create({ contact, emergency, email, password });

  return res.status(201).json(
    new ApiResponse(
      201,
      {
        _id: admin._id,
        contact: admin.contact,
        emergency: admin.emergency,
        email: admin.email,
        activeStatus: admin.activeStatus,
      },
      "Admin registered successfully"
    )
  );
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw ApiError.badRequest("Email and password are required");
  }

  const admin = await Admin.findOne({ email: email.toLowerCase() }).select("+password");

  if (!admin) {
    throw ApiError.unauthorized("Invalid email or password");
  }

  if (!admin.activeStatus) {
    throw ApiError.forbidden("Admin account is inactive");
  }

  const isPasswordCorrect = await admin.isPasswordValid(password);
  if (!isPasswordCorrect) {
    throw ApiError.unauthorized("Invalid email or password");
  }

  const token = admin.generateAuthToken();

  return res
    .status(200)
    .cookie("token", token, cookieOptions)
    .json(
      new ApiResponse(
        200,
        {
          _id: admin._id,
          contact: admin.contact,
          emergency: admin.emergency,
          email: admin.email,
          activeStatus: admin.activeStatus,
        },
        "Logged in successfully"
      )
    );
});

const logoutAdmin = asyncHandler(async (req, res) => {
  res.clearCookie("token", cookieOptions);
  return res.status(200).json(new ApiResponse(200, null, "Logged out successfully"));
});

const getAdminProfile = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, req.admin, "Profile fetched"));
});

const getAdminById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw ApiError.badRequest("Invalid ID format");
  }

  const admin = await Admin.findById(id);
  if (!admin) {
    throw ApiError.notFound("Admin not found");
  }

  return res.status(200).json(new ApiResponse(200, admin));
});

const updateAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw ApiError.badRequest("Invalid ID format");
  }

  const { contact, emergency, email } = req.body;

  const updatedAdmin = await Admin.findByIdAndUpdate(
    id,
    { contact, emergency, email },
    { new: true, runValidators: true }
  );

  if (!updatedAdmin) {
    throw ApiError.notFound("Admin not found");
  }

  return res.status(200).json(new ApiResponse(200, updatedAdmin, "Admin updated"));
});

const updateAdminPassword = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw ApiError.badRequest("Invalid ID format");
  }

  if (!oldPassword || !newPassword) {
    throw ApiError.badRequest("Old and new password are required");
  }

  const admin = await Admin.findById(id).select("+password");
  if (!admin) {
    throw ApiError.notFound("Admin not found");
  }

  const isMatch = await admin.isPasswordValid(oldPassword);
  if (!isMatch) {
    throw ApiError.unauthorized("Old password is incorrect");
  }

  admin.password = newPassword;
  await admin.save();

  return res.status(200).json(new ApiResponse(200, null, "Password updated successfully"));
});

const toggleAdminStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw ApiError.badRequest("Invalid ID format");
  }

  const admin = await Admin.findById(id);
  if (!admin) {
    throw ApiError.notFound("Admin not found");
  }

  admin.activeStatus = !admin.activeStatus;
  await admin.save();

  return res.status(200).json(new ApiResponse(200, admin, "Status toggled"));
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw ApiError.badRequest("Invalid ID format");
  }

  const deletedAdmin = await Admin.findByIdAndDelete(id);
  if (!deletedAdmin) {
    throw ApiError.notFound("Admin not found");
  }

  return res.status(200).json(new ApiResponse(200, null, "Admin deleted successfully"));
});

module.exports = {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAdminProfile,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
};