import IClouds from './IClouds';
import IMain from './IMain';
import IRain from './IRain';
import ISystem from './ISystem';
import IWeather from './IWeather';
import IWind from './IWind';

export default interface IForecastDay {
  dt: number;
  main: IMain;
  weather: IWeather[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  rain?: IRain;
  sys: ISystem;
}
