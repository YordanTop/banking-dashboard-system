import { Router } from "express";

import {  } from "../controller/userController";
import { authenticationHandler, authorizationHandler } from "../middleware/authHandler";
import { UserRole } from "../model/enums/UserRole";


const userRouter = Router();

export default userRouter;

