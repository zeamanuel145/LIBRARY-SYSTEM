"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controller/AuthController"));
const Validation_1 = require("../middleware/Validation");
const router = express_1.default.Router();
// Route for user registration
router.post('/register', (0, Validation_1.validateSchema)(Validation_1.Schemas.user.create, 'body'), AuthController_1.default.handleRegister);
router.post('/login', (0, Validation_1.validateSchema)(Validation_1.Schemas.user.login, 'body'), AuthController_1.default.handleLogin);
module.exports = router;
