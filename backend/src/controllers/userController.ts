import { Request, Response, NextFunction} from "express";
import { signUpService, signInService } from "../services/userService";

const signUpController = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const user = await signUpService(name, email, password);
        res.status(201).json({ id: user.id, email: user.email });
      } catch (error: any) {
        next(error);
      }
}

const signInController = async (req:Request, res:Response, next: NextFunction) => {
  try {
      const { email, password } = req.body;
      const token = await signInService(email, password);
      res.status(200).json({ token });
    } catch (error: any) {
      next(error);
    }
}

export {signUpController, signInController};