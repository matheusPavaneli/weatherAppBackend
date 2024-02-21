import { Request, Response } from 'express';

import services from '../utils/createServices';

class WeatherController {
  async getCurrentWeatherData(req: Request, res: Response) {
    const { city, language, unitsSystem } = req.query;
    const { WeatherService } = services;
    const currentWeatherData = await WeatherService.getCurrentWeatherData(
      city as string,
      language as string,
      unitsSystem as string,
    );

    res.status(200).json(currentWeatherData);
  }
  async getForecastWeatherData(req: Request, res: Response) {
    const { city, language, unitsSystem } = req.query;
    const { WeatherService } = services;
    const currentWeatherData = await WeatherService.getForecastWeatherData(
      city as string,
      language as string,
      unitsSystem as string,
    );

    res.status(200).json(currentWeatherData);
  }
}

export default new WeatherController();
