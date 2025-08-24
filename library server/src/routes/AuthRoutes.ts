import express from 'express';
import AuthController from '../controller/AuthController';
import {Schemas,validateSchema} from '../middleware/Validation';

const router = express.Router();
// Route for user registration
router.post('/register', validateSchema(Schemas.user.create,'body'), AuthController.handleRegister);
router.post('/login', validateSchema(Schemas.user.login,'body'), AuthController.handleLogin);
export=router;