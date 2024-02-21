import ITimezoneAPI from './ITimezoneAPI';
import IUVApi from './IUVApi';
import IUnsplashApi from './IUnsplashAPI';
import IWeatherAPI from './IWeatherAPI';

export default interface IServiceReturn {
  WeatherService: IWeatherAPI;
  TimezoneService: ITimezoneAPI;
  UVService: IUVApi;
  UnsplashService: IUnsplashApi;
}
