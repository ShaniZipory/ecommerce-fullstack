import { Router } from "express";
import { signInController, signUpController } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/signup", signUpController);
userRouter.post("/signin", signInController);

export {userRouter};