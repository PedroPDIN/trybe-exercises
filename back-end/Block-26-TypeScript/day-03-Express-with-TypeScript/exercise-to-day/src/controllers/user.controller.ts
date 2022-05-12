import { Request, Response } from 'express';
import UserService from "../services/user.services";
// import { IUser } from "../interfaces/user.interfaces";

const service = new UserService() 

export const getAllController = async (_req:Request, res:Response):Promise<Response>  => {
    const result = await service.getAll();
    if(!result) return res.status(400).json({ message: 'Error' })
    return res.status(200).json(result);
}