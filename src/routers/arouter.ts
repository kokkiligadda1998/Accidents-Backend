import express from "express";
const router = express.Router();
import * as  aController from '../controllers/aController';

router.post('/query1', aController.query1);
router.post('/query2', aController.query2);
router.post('/query3', aController.query3);
router.post('/query4', aController.query4);
router.post('/query5', aController.query5);
router.post('/query6', aController.query6);

export default router;