// user.validation.ts
import { z } from 'zod';

export const userZodValidationSchema = z.object({

 
 
  password: z
    .string({
        invalid_type_error: "Name must be a string",
    })
    .min(6, 'Password must be at least 6 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .optional()
    
});



export default {
    userZodValidationSchema
}