

import { Request } from "express";
import httpStatus from "http-status";
import prisma from "../../utils/prisma";
import AppError from "../../errors/AppError";


// Create Bike
const createBikeIntoDB = async (req: Request) => {

    const result = await prisma.$transaction(async (transactionClient) => {

        const customer = await prisma.customer.findUnique({
            where: {
                customerId: req.body.customerId
            }
        })

        if (!customer) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Customer ID not found');
        }

        const createdBikeData = await (transactionClient as any).bike.create({
            data: req.body
        });

        return createdBikeData;
    });
    return result;
};


// Get All Bike
const getAllBikeFromDB = async (): Promise<Bike[]> => {
    return await prisma.bike.findMany();
}





export const bikeService = {
    createBikeIntoDB,
}