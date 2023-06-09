import ICar from '../Interfaces/ICar';
import Automobile from './Vehicle';

class Car extends Automobile {
  private doorsQty: number;
  private seatsQty: number;

  constructor(infos: ICar) {
    super(infos);
    this.doorsQty = infos.doorsQty;
    this.seatsQty = infos.seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;