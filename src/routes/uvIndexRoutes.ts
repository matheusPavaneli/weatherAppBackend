import { Router } from 'express';

import UVIndexController from '../controllers/UVIndexController';

const router = Router();

router.get('/', UVIndexController.getCurrentUVIndex);

export default router;
