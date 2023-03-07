import { Model, model, models, Schema } from 'mongoose';

export default class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(details: T): Promise<T> {
    return this.model.create({ ...details });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async findByIdAndUpdate(id: string, details: Partial<T>): Promise<T | null> {
    await this.model.updateOne({ id }, { ...details });
    return this.model.findOne({ id });
  }
}