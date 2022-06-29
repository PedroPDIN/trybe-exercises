import { Router } from 'express';

import CupController from '../controllers';

const controller = new CupController();

const routerCup = Router();

routerCup.get('/', controller.getCups);
routerCup.get('/:year', controller.getCupToYear);
routerCup.get('/runnerCup/:vice', controller.getRunnerUp);
routerCup.post('/', controller.create);
routerCup.put('/:year', controller.editCup);
routerCup.delete('/:champion', controller.deleteCup);

export default routerCup;

