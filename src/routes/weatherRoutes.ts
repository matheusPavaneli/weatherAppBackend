import { Router } from 'express';

import WeatherController from '../controllers/WeatherController';

const router = Router();

router.get('/current', WeatherController.getCurrentWeatherData);
router.get('/forecast', WeatherController.getForecastWeatherData);

export default router;
