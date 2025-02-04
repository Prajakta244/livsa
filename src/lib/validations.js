import { z } from "zod"
export const formSchema = z.object({
    name: z.string().min(2,{message:'Username must be 2 characters long'}).max(50),
    email: z.string().email("Invalid email address"),
    phone_number: z
    .string()
    .refine((phone) => /^\d{10}$/.test(phone), "Invalid phone number"),
    qualification:z.string().min(2,{message:'Qualification must be 2 characters long'}).max(50),
    avg_time:z.coerce.number()
  })