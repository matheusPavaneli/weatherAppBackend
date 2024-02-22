import moment from 'moment';
import axios from 'axios';

import IForecastWeatherData from '../interfaces/IForecastWeatherData';
import IWeatherAPI from '../interfaces/IWeatherAPI';
import IGeoApi from '../interfaces/IGeoApi';
import IWeatherDataResponse from '../interfaces/IWeatherDataResponse';
import IForecastDay from '../interfaces/IForecastDay';
import ICreateIconUrl from '../interfaces/ICreateIconUrl';

class WeatherApi implements IWeatherAPI {
  private apiKey: string = process.env.OPENWEATHER_KEY ?? 'default_key';
  private createIconUrl: ICreateIconUrl;
  private GeoApi: IGeoApi;

  constructor(GeoApi: IGeoApi, createIconUrl: ICreateIconUrl) {
    this.GeoApi = GeoApi;
    this.createIconUrl = createIconUrl;
  }

  async getCurrentWeatherData(
    cityName: string,
    language: string,
    unitsSystem: string,
  ): Promise<IWeatherDataResponse> {
    const { lat, lon } = await this.GeoApi.getCoordinates(cityName);
    const { data }: { data: IForecastDay } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=${language}&units=${unitsSystem}&cnt=5`,
    );
    return {
      description: data.weather[0].description,
      icon: this.createIconUrl(data.weather[0].icon),
      humidity: data.main.humidity,
      temp: data.main.temp.toFixed(),
      dt: moment.unix(data.dt).format('HH:mm'),
      sunrise: moment.unix(data.sys.sunrise).format('HH:mm'),
      sunset: moment.unix(data.sys.sunset).format('HH:mm'),
    };
  }

  async getForecastWeatherData(
    cityName: string,
    language: string,
    unitsSystem: string,
  ): Promise<IWeatherDataResponse[]> {
    const { lat, lon } = await this.GeoApi.getCoordinates(cityName);
    const { data }: { data: IForecastWeatherData } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=${language}&units=${unitsSystem}&cnt=5`,
    );

    const extractedWeatherData = data.list.map((day) => ({
      description: day.weather[0].description,
      icon: this.createIconUrl(day.weather[0].icon),
      humidity: day.main.humidity,
      temp: day.main.temp.toFixed(),
      dt: moment.unix(day.dt).format('HH:mm'),
      rain: day.rain?.['3h'] ?? 0,
      windSpeed: day.wind.speed,
    }));

    return extractedWeatherData;
  }

  getIcon(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}

export default WeatherApi;
