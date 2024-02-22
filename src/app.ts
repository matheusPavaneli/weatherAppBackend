import 'express-async-errors';
import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import weatherRoutes from './routes/weatherRoutes';
import timezoneRoutes from './routes/timezoneRoutes';
import uvIndexRoutes from './routes/uvIndexRoutes';
import imageRoutes from './routes/imageRoutes';
import errorHandler from './middlewares/errorHandler';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(
      cors({
        origin: 'https://matheuspavaneli.github.io/weatherWiseApp',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: false,
      }),
    );
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
