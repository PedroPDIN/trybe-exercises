import { Router } from 'express';
import { getAllController } from '../controllers/user.controller';

const route = Router();

route.get('/', getAllController);

export default route;