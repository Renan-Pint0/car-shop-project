import { Router } from 'express';
import CarController from '../Controllers/CarController';
import idValidate from '../middlewares/idValidate';

const carRoutes = Router();

carRoutes.post('/', (req, res, next) => new CarController(req, res, next).create());
carRoutes.get('/', (req, res, next) => new CarController(req, res, next).getAllCars());
carRoutes.get('/:id', (req, res, next) => new CarController(req, res, next).getCarById());
carRoutes.put('/:id', idValidate, (req, res, next) => new CarController(req, res, next).update());

export default carRoutes;