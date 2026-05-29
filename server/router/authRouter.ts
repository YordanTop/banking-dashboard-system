import { Router } from "express";

import { login, logout, register, getCredentials } from "../controller/authController";


const authRouter = Router();

authRouter.post('/login', login);
authRouter.get('/logout', logout);
authRouter.get('/me', getCredentials)
authRouter.post('/register', register);

export default authRouter;

