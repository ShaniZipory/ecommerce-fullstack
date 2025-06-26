import { Request, Response } from "express";
import { signUpService } from "../services/userService";

const signUpController = async (req:Request, res:Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await signUpService(name, email, password);
        res.status(201).json({ id: user.id, email: user.email });
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
}

export {signUpController};