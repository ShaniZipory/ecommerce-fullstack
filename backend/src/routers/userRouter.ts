import { Router } from "express";
import { signUpController } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/signup", signUpController);

export {userRouter};