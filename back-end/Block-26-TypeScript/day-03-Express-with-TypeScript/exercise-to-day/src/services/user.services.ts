import UserModel from "../models/user.model";
import connection from "../models/connection";
import { IUser } from "../interfaces/user.interfaces";

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  };

  public async getById(id: number): Promise<IUser | null> {
    const userId = await this.model.getById(id);
    return userId;
  };

  public async createdUser(u: IUser): Promise<IUser> {
    const create = await this.model.createdUser(u);
    return create;
  };

  public async updateUser(id: number, user: IUser): Promise<IUser | null> {
    const getId = await this.model.getById(id)
    if(!getId) return null;

    const update = await this.model.updateUser(id, user);
    return update;
  };


  public async destroyUser(id: number): Promise<void | null> {
    const getId = await this.model.getById(id)
    if(!getId) return null;

    await this.model.destroyUser(id)
  };
};
