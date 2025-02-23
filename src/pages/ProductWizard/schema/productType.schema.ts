import { z } from 'zod';

export const productTypeSchema = z.object({
    title: z.string().nonempty({ message: 'Please provide a title' }).max(250),
    type: z.union([z.literal('coupon'), z.literal('service')]),
});
export type ProductTypeData = z.infer<typeof productTypeSchema>;
