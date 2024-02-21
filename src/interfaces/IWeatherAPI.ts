import IWeatherDataResponse from './IWeatherDataResponse';

export default interface IWeatherAPI {
  getCurrentWeatherData(
    cityName: string,
    language: string,
    unitsSystem: string,
  ): Promise<IWeatherDataResponse>;
  getForecastWeatherData(
    cityName: string,
    language: string,
    unitsSystem: string,
  ): Promise<IWeatherDataResponse[]>;
  getIcon(iconCode: string): string;
}
