import { Router } from 'express';
import * as PageController from '../controllers/PageController';

const router = Router();

router.get('/', PageController.Home);
router.get('/dogs', PageController.Dogs);
router.get('/cats', PageController.Cats);
router.get('/fishes', PageController.Fishes);

export default router;
