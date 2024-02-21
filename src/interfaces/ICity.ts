import ICoordinates from './ICoordinates';

export interface ICity {
  id: number;
  name: string;
  coord: ICoordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise?: number;
  sunset?: number;
  dt: number;
}
