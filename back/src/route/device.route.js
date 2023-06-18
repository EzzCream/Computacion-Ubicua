import { Router } from 'express';
import * as Device from '../controller/device.controller.js';

const router = Router();

router.post('/add/:userID', Device.createDevice);

router.post('/status/:id', Device.updateStatus);

router.get('/getAll/:userID', Device.getAllDevices);

export default router;
