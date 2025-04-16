
import express from 'express';
import { customerRoutes } from '../modules/Customer/customer.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/customers',
        route: customerRoutes
    },
    // {
    //     path: '/admin',
    //     route: AdminRoutes
    // },
    // {
    //     path: '/auth',
    //     route: AuthRoutes
    // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;