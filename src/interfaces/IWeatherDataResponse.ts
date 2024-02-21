export default interface IWeatherDataResponse {
  description: string;
  icon: string;
  humidity: number;
  temp: string;
  dt: string;
  rain?: number | undefined;
  sunrise?: string;
  sunset?: string;
  windSpeed?: number;
}
