import { Request, Response } from 'express';

import services from '../utils/createServices';

class UVIndexController {
  async getCurrentUVIndex(req: Request, res: Response) {
    const { city } = req.query;
    const { UVService } = services;
    const currentWeatherData = await UVService.getCurrentUV(city as string);
    res.status(200).json(currentWeatherData);
  }
}

export default new UVIndexController();
