
import { Request } from "express";
import httpStatus from "http-status";


// Create Bike
const createBikeIntoDB = async (req: Request) => {

    const result = await prisma.customer.create({
        data: req.body
    })

    return result;
};



export const bikeService = {
    createBikeIntoDB,
}