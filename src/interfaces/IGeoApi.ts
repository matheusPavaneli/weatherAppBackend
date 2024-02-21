import ICoordinates from './ICoordinates';

export default interface IGeoApi {
  getCoordinates(cityName: string): Promise<ICoordinates>;
}
