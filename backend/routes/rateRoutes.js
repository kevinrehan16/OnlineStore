import express from 'express'
import { saveRate, getRates } from '../controllers/rateController.js'

const router = express.Router();

router.get("/", getRates);
router.post("/save", saveRate);

export default router;