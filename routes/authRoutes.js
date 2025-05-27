const {register, login} = require("../controllers/authControllers");
const validateData = require("../middleware/validateMiddleware");
const {registerSchema, loginSchema} = require("../validations/authValidations");
const router = require("express").Router();

router.post("/register", validateData(registerSchema), register);
router.post("/login", validateData(loginSchema), login);

module.exports = router;