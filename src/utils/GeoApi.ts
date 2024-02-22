import axios from 'axios';

import { NotFoundError } from './ApiError';
import IGeoResponse from '../interfaces/IGeoResponse';
import ICoordinates from '../interfaces/ICoordinates';
import IGeoApi from '../interfaces/IGeoApi';

class GeoApi implements IGeoApi {
  private apiKey: string = process.env.OPENWEATHER_KEY ?? 'default_key';

  async getCoordinates(cityName: string): Promise<ICoordinates> {
    const { data }: { data: IGeoResponse[] } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${this.apiKey}`,
    );

    if (data.length < 1) {
      throw new NotFoundError('No location found');
    }

    return {
      lat: data[0].lat,
      lon: data[0].lon,
    };
  }
}

export default GeoApi;
