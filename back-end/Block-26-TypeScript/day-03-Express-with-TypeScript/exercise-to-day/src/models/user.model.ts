import { Pool } from "mysql2/promise";
import { IUser } from "../interfaces/user.interfaces";

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  };

  public async getAll(): Promise<IUser[]> {
    const query = 'SELECT * FROM Users;'
    const [result] = await this.connection.execute(query);
    return result as IUser[];
  };

  public async getById(id: number): Promise<IUser | null> {
    const query = 'SELECT * FROM Users WHERE id = ?';
    const [data] = await this.connection.execute(query, [id]);
    const [user] = data as IUser[];
    return user || null;
  };
};
