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


// get Bike by ID
const getByServiceId = catchAsync(async (req: Request, res: Response) => {
    const { serviceId } = req.params;

    const result = await recordService.getByServiceIdFromDB(serviceId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result
    });
})


// completed service api
const completeService = catchAsync(async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const result = await recordService.completeServiceInDB(
        serviceId,
        req.body
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service marked as completed",
        data: result
    });
});



// const getPendingOrOverdueServices = catchAsync(async (req: Request, res: Response) => {
//   const result = await ServiceRecordService.getPendingOrOverdueServices();
  
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Overdue or pending services fetched successfully',
//     data: result,
//   });
// });



export const serviceController = {
    createService,
    getAllService,
    getByServiceId,
    completeService
}