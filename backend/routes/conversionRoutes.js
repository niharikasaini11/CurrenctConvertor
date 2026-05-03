import express from 'express';
import { getHistory, postData } from '../controller/conversionController.js';

const router = express.Router();

router.post("/convert", postData);
router.get('/history', getHistory);

export default router;