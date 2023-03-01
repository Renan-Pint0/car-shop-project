import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

class CarService {
  private createDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createDomain(newCar);
  }

  public async ListCars() {
    const carODM = new CarODM();
    const allCars = await carODM.findCars();
    const cars = allCars.map((car) => this.createDomain(car));
    return cars;
  }

  public async ListCarsByid(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findCarById(id);
    return this.createDomain(car);
  }
}

export default CarService;