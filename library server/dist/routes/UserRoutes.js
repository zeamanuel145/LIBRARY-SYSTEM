"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserContoller_1 = __importDefault(require("../controller/UserContoller"));
const Validation_1 = require("../middleware/Validation");
const router = express_1.default.Router();
router.get("/", UserContoller_1.default.getAllUsers);
router.get("/:userId", (0, Validation_1.validateSchema)(Validation_1.Schemas.user.userId, 'params'), UserContoller_1.default.getUserById);
router.delete("/:userId", (0, Validation_1.validateSchema)(Validation_1.Schemas.user.userId, 'params'), UserContoller_1.default.deleteUser);
router.put("/:userId", (0, Validation_1.validateSchema)(Validation_1.Schemas.user.update, 'params'), UserContoller_1.default.updateUser);
exports.default = router;
