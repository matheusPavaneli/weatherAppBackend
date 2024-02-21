import IImageResponse from './IImageResponse';

export default interface IUnsplashApi {
  getPhoto(cityName: string): Promise<IImageResponse>;
}
