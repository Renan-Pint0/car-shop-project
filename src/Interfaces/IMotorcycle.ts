import IAutomobile from './IVehicle';

interface IMotorcycle extends IAutomobile {
  category: string;
  engineCapacity: number;
}

export default IMotorcycle;