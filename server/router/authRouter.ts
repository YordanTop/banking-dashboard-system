import { Router } from "express";

import { login, logout, register } from "../controller/authController";


const authRouter = Router();

authRouter.post('/login', login);
authRouter.get('/logout', logout);
authRouter.post('/register', register);

export default authRouter;

