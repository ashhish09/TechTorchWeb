const express = require("express");
const router = express.Router();

const {
  getAdminProfile,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
} = require("../controllers/adminController");

const authMiddleware = require("../middlewares/auth.middleware");
const { requireSuperadmin } = authMiddleware;

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/profile", authMiddleware, getAdminProfile);
router.get("/:id", authMiddleware, getAdminById);
router.put("/:id", authMiddleware, updateAdmin);
router.put("/:id/password", authMiddleware, updateAdminPassword);
router.patch("/:id/status", authMiddleware, toggleAdminStatus);
router.delete("/:id", authMiddleware, deleteAdmin);

module.exports = router;