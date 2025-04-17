import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { recordService } from "./serviceR.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


// Create Service
const createService = catchAsync(async (req: Request, res: Response) => {

    const result = await recordService.createServiceIntoDB(req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result
    })
});


// get All Bike
const getAllService = catchAsync(async (req: Request, res: Response) => {

    const result = await recordService.getAllServiceFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service records fetched successfully',
        data: result,
    });
});


export const serviceController = {
    createService,
    getAllService
}