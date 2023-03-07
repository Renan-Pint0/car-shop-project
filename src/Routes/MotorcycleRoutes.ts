import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import idValidate from '../middlewares/idValidate';

const motoRoutes = Router();

motoRoutes.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
motoRoutes.get('/', async (req, res, next) => new MotorcycleController(req, res, next).getAll());
motoRoutes.get(
  '/:id',
  idValidate, 
  async (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default motoRoutes;