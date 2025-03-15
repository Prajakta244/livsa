import { z } from "zod"
export const formSchema = z.object({
    name: z.string().min(1,{message:'Username is required'}).min(3,{message:'Username must be at least 3 characters'}).max(50),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phone_number: z
    .string().min(1, "Phone number is required") 
    .refine((phone) => /^\d{10}$/.test(phone), "Invalid phone number"),
    qualification:z.string().min(1, "Qualification is required") .min(2,{message:'Qualification must be 2 characters long'}).max(50),
    avg_time:z.coerce.number(),
    clinic:z.string().min(1, "Clinic name is required").min(3,{message:'Clinic name must be at least 3 characters'}),
    clinic_number: z
    .string().min(1, "Phone number is required") 
    .refine((phone) => /^\d{10}$/.test(phone), "Invalid phone number"),
    receptionist_number:z
    .string().min(1, "Phone number is required") 
    .refine((phone) => /^\d{10}$/.test(phone), "Invalid phone number"),
  })