import { Router } from "express";

import { createUser, updateUser, selectUser, selectAllUser, deleteUser } from "../controller/userController";

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.put('/', updateUser);
userRouter.get('/', selectUser);
userRouter.get('/all', selectAllUser);
userRouter.delete('/', deleteUser);

export default userRouter;
