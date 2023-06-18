import { Router } from 'express';
import * as User from '../controller/user.controller.js';

const router = Router();

router.post('/add', User.createUser);

export default router;
