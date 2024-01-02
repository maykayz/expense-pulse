import {z} from "zod";

export const expenseSchema = z.object({
	date: z.string().transform((value) => new Date(value)),
	amount: z.number().min(1),
	currency: z.string(),
	platform: z.string().min(1),
	category: z.string().min(1),
});