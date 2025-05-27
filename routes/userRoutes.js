const { valid } = require("joi");
const {hrDashboard, adminDashboard, employeeDashboard }= require("../controllers/userControllers");
const verifyToken = require("../middleware/authMiddleware");
const validateRole = require("../middleware/roleBasedAccess");

const router = require("express").Router();

router.get("/admin-dashboard", verifyToken, validateRole("Admin"), adminDashboard);
router.get("/hr-dashboard", verifyToken, validateRole("HR", "Admin"), hrDashboard);
router.get("/employee-dashboard", verifyToken, validateRole("HR", "Admin", "Employee"), employeeDashboard);

module.exports = router;