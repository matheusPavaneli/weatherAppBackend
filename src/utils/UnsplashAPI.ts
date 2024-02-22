import axios from 'axios';

import IUnsplashApi from '../interfaces/IUnsplashAPI';
import IImageData from '../interfaces/IImageData';
import IImageResponse from '../interfaces/IImageResponse';

class UnsplashAPI implements IUnsplashApi {
  private apiKey: string = process.env.UNSPLASH_API_KEY ?? 'defaul_key';

  async getPhoto(cityName: string): Promise<IImageResponse> {
    const { data }: { data: IImageData } = await axios.get(
      `https://api.unsplash.com/photos/random?query=${cityName}&client_id=${this.apiKey}`,
    );
    return {
      urls: data.urls ?? null,
    };
  }
}

export default UnsplashAPI;
