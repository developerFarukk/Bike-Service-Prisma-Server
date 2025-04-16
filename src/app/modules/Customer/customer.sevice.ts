

import { Request } from "express";
import prisma from "../../utils/prisma";



// create customer
const createAdmin = async (req: Request) => {

    const result = await prisma.customer.create({
        data: req.body
    })

    return result;
};





export const userService = {
    createAdmin,

}