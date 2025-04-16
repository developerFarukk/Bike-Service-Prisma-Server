
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bikeService } from "./bike.sevice";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


// Create bike
const createBike = catchAsync(async (req: Request, res: Response) => {

    const result = await bikeService.createBikeIntoDB(req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Bike added successfully",
        data: result
    })
});


export const bikeController = {
    createBike,

}