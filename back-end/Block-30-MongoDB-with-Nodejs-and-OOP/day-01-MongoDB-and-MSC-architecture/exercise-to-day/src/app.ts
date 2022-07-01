import express from 'express';
import connection from './models/connection';
import routerCup from './routes';

export default class App {
  public express: express.Express;
  public connection: void;

  constructor() {
    this.express = express();
    this.connection = connection('world_cups');
    this.app();
  }

  private app() {
    this.express.use(express.json());
    this.express.use('/cups', routerCup);
  }
};