
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { customerService } from "./customer.sevice";


// Create customer
const createCustomer = catchAsync(async (req: Request, res: Response) => {

    const result = await customerService.createCustomerIntoDB(req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Customer Created successfuly!",
        data: result
    })
});


// get all Customer
const getAllCustomer = catchAsync(async (req: Request, res: Response) => {

    const result = await customerService.getAllCustomerFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customers fetched successfully',
        data: result,
    });
});


// get customer by ID
const getByCustomerId = catchAsync(async (req: Request, res: Response) => {
    const { customerId } = req.params;
    
    const result = await customerService.getByCustomerIdFromDB(customerId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result
    });
})

// const createDoctor = catchAsync(async (req: Request, res: Response) => {

//     const result = await userService.createDoctor(req);
//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: "Doctor Created successfuly!",
//         data: result
//     })
// });

// const createPatient = catchAsync(async (req: Request, res: Response) => {

//     const result = await userService.createPatient(req);
//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: "Patient Created successfuly!",
//         data: result
//     })
// });

// const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
//     // console.log(req.query)
//     const filters = pick(req.query, userFilterableFields);
//     const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])

//     const result = await userService.getAllFromDB(filters, options)

//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: "Users data fetched!",
//         meta: result.meta,
//         data: result.data
//     })
// });

// const changeProfileStatus = catchAsync(async (req: Request, res: Response) => {

//     const { id } = req.params;
//     const result = await userService.changeProfileStatus(id, req.body)

//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: "Users profile status changed!",
//         data: result
//     })
// });


// const getMyProfile = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

//     const user = req.user;

//     const result = await userService.getMyProfile(user as IAuthUser);

//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: "My profile data fetched!",
//         data: result
//     })
// });

// const updateMyProfie = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

//     const user = req.user;

//     const result = await userService.updateMyProfie(user as IAuthUser, req);

//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: "My profile updated!",
//         data: result
//     })
// });

export const customerController = {
    createCustomer,
    getAllCustomer,
    getByCustomerId

}