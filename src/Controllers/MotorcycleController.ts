import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const newMotorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const motorcycle = await this.service.create(newMotorcycle);
      return this.res.status(201).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAll() {
    try {
      const allMoto = await this.service.getAll();
      return this.res.status(200).json(allMoto);
    } catch (err) {
      this.next(err);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const moto = await this.service.getById(id);
      return this.res.status(200).json(moto);
    } catch (err) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
  }
  public async update() {
    try {
      const { id } = this.req.params;
      const motoDetails: IMotorcycle = {
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        category: this.req.body.category,
        engineCapacity: this.req.body.engineCapacity,
      };
      const motoUpdate = await this.service.update(id, motoDetails);
      if (!motoUpdate) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motoUpdate);
    } catch (err) {
      this.next(err);
    }
  }
}