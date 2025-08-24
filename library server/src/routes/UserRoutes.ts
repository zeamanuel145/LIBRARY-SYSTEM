import express from "express";
import UserContoller from "../controller/UserContoller";
import { validateSchema, Schemas } from "../middleware/Validation";

const router=express.Router();

router.get("/",UserContoller.getAllUsers);
router.get("/:userId",validateSchema(Schemas.user.userId,'params'),UserContoller.getUserById);
router.delete("/:userId",validateSchema(Schemas.user.userId,'params'),UserContoller.deleteUser);
router.put("/:userId",validateSchema(Schemas.user.update,'params'),UserContoller.updateUser);

export default router;
