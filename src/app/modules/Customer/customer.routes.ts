

import express, { NextFunction, Request, Response } from 'express';
import { customerController } from './customer.controller';
import validateRequest from '../../utils/validateRequest';
import { customerValidation } from './customer.validation';


const router = express.Router();

// router.get(
//     '/',
//     auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//     userController.getAllFromDB
// );

// router.get(
//     '/me',
//     auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
//     userController.getMyProfile
// )

// Create customer route
router.post(
    "/create-customer",
    // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    // validateRequest(customerValidation.createCustomerValidation),
    customerController.createCustomer
);

// router.post(
//     "/create-doctor",
//     auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//     fileUploader.upload.single('file'),
//     (req: Request, res: Response, next: NextFunction) => {
//         req.body = userValidation.createDoctor.parse(JSON.parse(req.body.data))
//         return userController.createDoctor(req, res, next)
//     }
// );

// router.post(
//     "/create-patient",
//     fileUploader.upload.single('file'),
//     (req: Request, res: Response, next: NextFunction) => {
//         req.body = userValidation.createPatient.parse(JSON.parse(req.body.data))
//         return userController.createPatient(req, res, next)
//     }
// );

// router.patch(
//     '/:id/status',
//     auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//     validateRequest(userValidation.updateStatus),
//     userController.changeProfileStatus
// );

// router.patch(
//     "/update-my-profile",
//     auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
//     fileUploader.upload.single('file'),
//     (req: Request, res: Response, next: NextFunction) => {
//         req.body = JSON.parse(req.body.data)
//         return userController.updateMyProfie(req, res, next)
//     }
// );


export const customerRoutes = router;