

import { Request } from "express";
import prisma from "../../utils/prisma";



// create customer
const createCustomerIntoDB = async (req: Request) => {

    const result = await prisma.customer.create({
        data: req.body
    })

    return null;
};



export const customerService = {
    createCustomerIntoDB,

}


