import IAutomobile from './IVehicle';

interface ICar extends IAutomobile {
  doorsQty: number,
  seatsQty: number,
}

export default ICar;