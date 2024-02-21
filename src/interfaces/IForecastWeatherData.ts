import { ICity } from './ICity';
import IForecastDay from './IForecastDay';

export default interface IForecastWeatherData {
  list: IForecastDay[];
  city: ICity;
}
