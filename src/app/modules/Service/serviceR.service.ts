

import { ServiceRecord } from "@prisma/client";
import prisma from "../../utils/prisma";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";




// Create Service
const createServiceIntoDB = async (req: any): Promise<ServiceRecord> => {


    const result = await prisma.$transaction(async (transactionClient) => {

        const bike = await prisma.bike.findUnique({
            where: {
                bikeId: req.body.bikeId
            }
        })

        if (!bike) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Bike ID not found');
        }

        const createdServiceData = await (transactionClient as any).ServiceRecord.create({
            data: req.body
        });

        return createdServiceData;
    });
    return result;
};


// Get All Service
const getAllServiceFromDB = async (): Promise<ServiceRecord[]> => {
    return await prisma.serviceRecord.findMany();
}


// get Service by ID
const getByServiceIdFromDB = async (serviceId: string): Promise<ServiceRecord | null> => {
    const result = await prisma.serviceRecord.findUnique({
        where: {
            serviceId
        }
    })

    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Service Record ID not found');
    }

    return result;
};



export const recordService = {
    createServiceIntoDB,
    getAllServiceFromDB,
    getByServiceIdFromDB
}