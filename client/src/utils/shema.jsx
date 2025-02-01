import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be more 2 characters"),
  price: z.coerce.number(), // ใช้เพื่อให้ zod รู้ว่าเป็น number
  description: z
    .string()
    .max(50, "Description must be less than 50 characters"),
  category: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});


export const profileSchema = z.object({
  firstname: z.string()
  .min(2, "Title must be more 2 characters")
  .max(30, "Title must be less than 30 characters"),
  lastname: z.string()
  .min(2, "Title must be more 2 characters")
  .max(30, "Title must be less than 30 characters"),
  

});