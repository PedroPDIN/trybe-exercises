import { IUser } from './../interfaces/user.interfaces';
import { Request, Response } from 'express';
import UserService from "../services/user.services";

const service = new UserService() 

export const getAllController = async (_req:Request, res:Response):Promise<Response>  => {
    const result = await service.getAll();
    if(!result) return res.status(400).json({ message: 'Error' })
    return res.status(200).json(result);
};

export const getByIdController = async (req:Request, res:Response):Promise<Response> => {
    const result = await service.getById(Number(req.params.id));
    if(!result) return res.status(400).json({ message: 'Not Found' });
    return res.status(200).json(result);
};

export const createUser = async (req:Request, res:Response):Promise<Response> => {
    const user = req.body as IUser;
    const result = await service.createdUser(user);
    if(!result) return res.status(400).json({ message: 'Error' });
    return res.status(201).json(result);
};

export const updateUser = async (req:Request, res:Response):Promise<Response> => {
    const userId = req.params.id;
    const userBody = req.body;
    const result = await service.updateUser(Number(userId), userBody)
    if(!result) return res.status(400).json({ message: 'Not found' });
    return res.status(200).json(result);
};

export const destroyUser = async (req:Request, res:Response): Promise<Response> => {
    const userId = Number(req.params.id);
    await service.destroyUser(userId);
    return res.status(200).json({ message: 'User deleted success' })
};
