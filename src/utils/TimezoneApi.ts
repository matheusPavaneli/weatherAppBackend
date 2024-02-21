import axios from 'axios';
import moment from 'moment';

import IGeoApi from '../interfaces/IGeoApi';
import ITimezoneAPI from '../interfaces/ITimezoneAPI';
import ITimezoneData from '../interfaces/ITimezoneData';
import ITimezoneResponse from '../interfaces/ITimezoneResponse';

class TimezoneApi implements ITimezoneAPI {
  private apiKey: string = process.env.TIMEZONE_API_KEY ?? 'default_key';
  private GeoAPI: IGeoApi;

  constructor(GeoAPI: IGeoApi) {
    this.GeoAPI = GeoAPI;
  }

  async getTimezone(cityName: string): Promise<ITimezoneResponse> {
    const { lat, lon } = await this.GeoAPI.getCoordinates(cityName);
    const { data }: { data: ITimezoneData } = await axios.get(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${this.apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`,
    );

    return {
      countryName: data.countryName,
      regionName: data.regionName,
      cityName: data.cityName,
      formatted: moment(data.formatted).format('HH:mm'),
    };
  }
}

export default TimezoneApi;
