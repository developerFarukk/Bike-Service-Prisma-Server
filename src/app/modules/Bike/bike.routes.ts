
import express from 'express';
import { bikeController } from './bike.controller';
import validateRequest from '../../utils/validateRequest';
import { bikeValidation } from './bike.validation';

const router = express.Router();


// Create bike route
router.post(
    "/create-bike",
    validateRequest(bikeValidation.createBikeValidation),
    bikeController.createBike
);

export const bikeRoutes = router;

