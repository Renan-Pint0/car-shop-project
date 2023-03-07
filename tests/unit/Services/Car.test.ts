import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testing Car Service', function () {
  it('Getting all cars with sucess', async function () {
    const getCars = [
      {
        id: '63eab2da6f1f836f7e7386ab',
        model: 'Marea',
        year: 2002,
        color: 'Red',
        status: true,
        buyValue: 25.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63eab3236f1f836f7e7386ad',
        model: 'Fusca',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 3.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    const domainCar = [
      new Car(getCars[0]),
      new Car(getCars[1]),
    ];

    Sinon.stub(Model, 'find').resolves(getCars);

    const result = await new CarService().ListCars();
    expect(result).to.be.deep.equal(domainCar);
  });

  it('Getting car by id', async function () {
    const car = {
      id: '63eab3236f1f836f7e7386ad',
      model: 'Fusca',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 3.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    const domainCar = new Car(car);

    Sinon.stub(Model, 'findById').resolves(domainCar);

    const result = await new CarService().ListCarsByid('63eab3236f1f836f7e7386ad');
    expect(result).to.be.deep.equal(domainCar);
  });

  it('Adding new Car', async function () {
    const input: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Green',
      status: true,
      buyValue: 25.999,
      doorsQty: 4,
      seatsQty: 5,
    };
    const output = {
      id: '63eab2da6f1f836f7e7486ab',
      model: 'Marea',
      year: 2002,
      color: 'Green',
      status: true,
      buyValue: 25.999,
      doorsQty: 4,
      seatsQty: 5,
    };

    const domainCar = new Car(output);

    Sinon.stub(Model, 'create').resolves(output);

    const result = await new CarService().create(input);
    expect(result).to.be.deep.equal(domainCar);
  });
  afterEach(function () {
    Sinon.restore();
  });
});