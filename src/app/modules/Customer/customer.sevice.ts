

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


// get customer by ID
const getByCustomerIdFromDB = async (customerId: string): Promise<Customer | null> => {
    const result = await prisma.customer.findUnique({
        where: {
            customerId
        }
    })

    if (!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Customer ID not found');
    }

    return result;
};



export const customerService = {
    createCustomerIntoDB,
    getAllCustomerFromDB,
    getByCustomerIdFromDB

}


