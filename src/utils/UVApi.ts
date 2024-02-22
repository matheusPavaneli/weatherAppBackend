import axios from 'axios';

import IGeoApi from '../interfaces/IGeoApi';
import IUVApi from '../interfaces/IUVApi';
import UVIndexData from '../interfaces/IUVIndexData';
import IUVIndexResponse from '../interfaces/IUVIndexResponse';

class UVApi implements IUVApi {
  private apiKey: string = process.env.UVINDEX_API_KEY ?? 'defaul_key';
  private GeoApi: IGeoApi;

  constructor(GeoApi: IGeoApi) {
    this.GeoApi = GeoApi;
  }

  async getCurrentUV(cityName: string): Promise<IUVIndexResponse> {
    const { lat, lon } = await this.GeoApi.getCoordinates(cityName);
    const { data }: { data: UVIndexData } = await axios.get(
      `https://currentuvindex.com/api/v1/uvi?latitude=${lat}&longitude=${lon}`,
    );
    return {
      uv: data.now.uvi.toFixed(),
    };
  }
}

export default UVApi;
