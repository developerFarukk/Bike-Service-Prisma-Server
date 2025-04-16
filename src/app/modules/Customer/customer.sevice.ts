

import { Request } from "express";
import prisma from "../../utils/prisma";
import { Customer } from "@prisma/client";



// create customer
const createCustomerIntoDB = async (req: Request) => {

    const result = await prisma.customer.create({
        data: req.body
    })

    return result;
};


// Get All Customer
const getAllCustomerFromDB = async (): Promise<Customer[]> => {
    return await prisma.customer.findMany();
}



export const customerService = {
    createCustomerIntoDB,
    getAllCustomerFromDB

}


