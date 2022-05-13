import { Request, Response, NextFunction } from "express";
import { userSchema } from "../joi/user.joi";

export const isValidUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};
