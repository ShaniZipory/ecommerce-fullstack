import { Request, Response, NextFunction} from "express";
import { signUpService } from "../services/userService";

const signUpController = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const user = await signUpService(name, email, password);
        res.status(201).json({ id: user.id, email: user.email });
      } catch (error: any) {
        next(error);
      }
}

export {signUpController};