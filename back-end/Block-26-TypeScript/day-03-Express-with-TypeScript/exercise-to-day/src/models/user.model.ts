import { Pool, ResultSetHeader } from "mysql2/promise";
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

  public async createdUser(u: IUser): Promise<IUser> {
    const { name, email, password } = u;
    const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?);'
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, email, password]);
    const newUser:IUser = { id: insertId, name, email, password };
    return newUser;
  };

  public async updateUser(id: number, u:IUser): Promise<IUser | null> {
    const { name, email, password } = u;
    const query = 'UPDATE TypeScriptExpress.Users SET name = ?, email = ?, password = ? WHERE id = ?;'
    await this.connection.execute<ResultSetHeader>(query, [name, email, password, id]);
    const newUser:IUser = { id, name, email, password };
    return newUser;
  };

  public async destroyUser(id: number): Promise<void> {
    const query = 'DELETE FROM TypeScriptExpress.Users WHERE id = ?;'
    await this.connection.execute(query, [id]);
  };
};
