import { z } from "zod";

export const CheckoutSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full Name is required" })
    .max(50, { message: "Full Name must be less than 50 characters" }),
  address: z
    .string()
    .min(1, { message: "Address is required" })
    .max(100, { message: "Address must be less than 100 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, { message: "Card Number must be a 16-digit number" }), // Validación para un número de tarjeta
});
