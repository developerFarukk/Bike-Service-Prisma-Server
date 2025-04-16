
import express from 'express';
import { customerRoutes } from '../modules/Customer/customer.routes';
import { bikeRoutes } from '../modules/Bike/bike.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/customers',
        route: customerRoutes
    },
    {
        path: '/bikes',
        route: bikeRoutes
    },
    // {
    //     path: '/auth',
    //     route: AuthRoutes
    // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;