import IUVIndexResponse from './IUVIndexResponse';

export default interface IUVApi {
  getCurrentUV(cityName: string): Promise<IUVIndexResponse>;
}
