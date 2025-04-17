
import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"
import config from "../config";


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = err.statusCode ||  httpStatus.INTERNAL_SERVER_ERROR;
    let success = false;
    let status = err.statusCode;
    let message = err.message || "Something went wrong!";
    // let error = err;
    

    if (err instanceof Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        status = err.message
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = "Duplicate Key error";
            status = err.meta;
        }
    }

    res.status(statusCode).json({
        success,
        status,
        message,
        stack: config.env === 'development' ? err?.stack : null,
    })
};

export default globalErrorHandler;