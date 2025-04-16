

import { z } from "zod";

// Create customer validation
const createBikeValidation = z.object({

    body: z.object({
        name: z.string({
            required_error: "Name is required!"
        }),
        email: z.string({
            required_error: "Email is required!"
        }).email("Invalid email format"),
        phone: z.string({
            required_error: "Contact Number is required!"
        }).min(11, "Phone number must be at least 11 characters")
    })

});


export const bikeValidation = {
    createBikeValidation,
}