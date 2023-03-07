import { expect } from 'chai';
import { Error, Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testing Motorcycle Service', function () {
  it('Getting all Motorcycles with sucess', async function () {
    const getMoto = [
      {
        id: '63eab2da6f1f836f7e7386ab',
        model: 'Honda Cb 600f Big Trail',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '63eab3236f1f836f7e7386ad',
        model: 'Honda Cb 600f',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600,
      },
    ];

    const domainMoto = [
      new Motorcycle(getMoto[0]),
      new Motorcycle(getMoto[1]),
    ];

    Sinon.stub(Model, 'find').resolves(getMoto);

    const result = await new MotorcycleService().getAll();
    expect(result).to.be.deep.equal(domainMoto);
  });

  it('Getting Motorcycle by id', async function () {
    const moto = {
      id: '63eab3236f1f836f7e7386ad',
      model: 'Honda Cb 600f',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const domainMoto = new Motorcycle(moto);

    Sinon.stub(Model, 'findById').resolves(domainMoto);

    const result = await new MotorcycleService().getById('63eab3236f1f836f7e7386ad');
    expect(result).to.be.deep.equal(domainMoto);
  });

  it('Adding new Motorcycle', async function () {
    const input: IMotorcycle = {
      model: 'Honda',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const output = {
      id: '63eab3236f1f836f7e7386ad',
      model: 'Honda',
      year: 2014,
      color: 'Black',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const domainMoto = new Motorcycle(output);

    Sinon.stub(Model, 'create').resolves(output);

    const result = await new MotorcycleService().create(input);
    expect(result).to.be.deep.equal(domainMoto);
  });

  it('Getting Motorcycle by id with incorrect id', async function () {
    const input: IMotorcycle = {
      model: 'Honda',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };
    Sinon.stub(Model, 'updateOne').resolves();
    Sinon.stub(Model, 'findOne').resolves(false);

    try {
      const service = new MotorcycleService();
      await service.update('63eab3236f1f836f7e7386ar', input);
    } catch (err) {
      expect((err as Error).message).to.equal('Motorcycle not found');
    }
  });

  afterEach(function () {
    Sinon.restore();
  });
});