import { Request, Response } from 'express';

import services from '../utils/createServices';
class ImageController {
  async getImage(req: Request, res: Response) {
    const { UnsplashService } = services;
    const { city } = req.query;
    const image = await UnsplashService.getPhoto(city as string);
    res.status(200).json(image);
  }
}

export default new ImageController();
