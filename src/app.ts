import 'express-async-errors';
import express, { Application } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import weatherRoutes from './routes/weatherRoutes';
import timezoneRoutes from './routes/timezoneRoutes';
import uvIndexRoutes from './routes/uvIndexRoutes';
import imageRoutes from './routes/imageRoutes';
import errorHandler from './middlewares/errorHandler';
import corsConfig from './config/corsConfig';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(cors(corsConfig));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use('/weather', weatherRoutes);
    this.app.use('/timezone', timezoneRoutes);
    this.app.use('/uvIndex', uvIndexRoutes);
    this.app.use('/image', imageRoutes);
    this.app.use(errorHandler);
  }
}

export default new App().app;
