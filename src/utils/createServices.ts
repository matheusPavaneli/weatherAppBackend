import ICreateIconUrl from '../interfaces/ICreateIconUrl';
import IGeoApi from '../interfaces/IGeoApi';
import IServiceReturn from '../interfaces/IServiceReturn';
import ITimezoneAPI from '../interfaces/ITimezoneAPI';
import IUVApi from '../interfaces/IUVApi';
import IUnsplashApi from '../interfaces/IUnsplashAPI';
import IWeatherAPI from '../interfaces/IWeatherAPI';
import GeoApi from './GeoApi';
import TimezoneApi from './TimezoneApi';
import UVApi from './UVApi';
import UnsplashAPI from './UnsplashAPI';
import WeatherApi from './WeatherApi';
import createIconUrl from './createIconUrl';

const createServices = (): IServiceReturn => {
  const GeoService: IGeoApi = new GeoApi();
  const createIconUrlService: ICreateIconUrl = createIconUrl;
  const UnsplashService: IUnsplashApi = new UnsplashAPI();
  const WeatherService: IWeatherAPI = new WeatherApi(
    GeoService,
    createIconUrlService,
  );
  const TimezoneService: ITimezoneAPI = new TimezoneApi(GeoService);
  const UVService: IUVApi = new UVApi(GeoService);

  return { WeatherService, TimezoneService, UVService, UnsplashService };
};

export default createServices();
