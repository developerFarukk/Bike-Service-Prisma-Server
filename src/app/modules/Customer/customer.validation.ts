

import { z } from "zod";

// Create customer validation
const createCustomerValidation = z.object({

    name: z.string({
        required_error: "Name is required!"
    }),
    email: z.string({
        required_error: "Email is required!"
    }),
    phone: z.string({
        required_error: "Contact Number is required!"
    })

});



export const customerValidation = {
    createCustomerValidation,
}