
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


// get all service route
router.get(
    '/',
    serviceController.getAllService
);


// get service ID 
router.get(
    '/:serviceId',
    serviceController.getByServiceId
);


// complet service route
router.put(
    '/:serviceId/complete',
    serviceController.completeService
);


// router.get(
//     '/status',
//     ServiceRecordController.getPendingOrOverdueServices
// );



export const ServiceRoutes = router;
