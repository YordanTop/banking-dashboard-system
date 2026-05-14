import { Router } from "express";

import { changeAuthorizationAccess, changePassword, login, logout, register } from "../controller/authController";


const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/register', register);
authRouter.put('/forgotten-password', changePassword);
authRouter.put('/access', changeAuthorizationAccess);

export default authRouter;

