import { Router } from 'express';

import TimezoneController from '../controllers/TimezoneController';

const router = Router();

router.get('/', TimezoneController.getTimezone);

export default router;
