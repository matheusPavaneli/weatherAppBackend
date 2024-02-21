import { Request, Response } from 'express';

import services from '../utils/createServices';

class TimezoneController {
  async getTimezone(req: Request, res: Response) {
    const { city } = req.query;
    const { TimezoneService } = services;

    const cityTimezone = await TimezoneService.getTimezone(city as string);

    res.status(200).json(cityTimezone);
  }
}

export default new TimezoneController();
