
import express from 'express';
import { serviceController } from './service.controller';
import validateRequest from '../../utils/validateRequest';
import { serviceValidation } from './service.validation';

const router = express.Router();


// Create bike route
router.post(
    "/create-service-record",
    validateRequest(serviceValidation.createServiceValidation),
    serviceController.createService
);



export const ServiceRoutes = router;
