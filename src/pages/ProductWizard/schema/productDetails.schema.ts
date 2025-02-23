import { z } from 'zod';

export const productDetailsSchema = z.object({
    id: z.number().optional(),
    state: z
        .union([
            z.literal('draft'),
            z.literal('live'),
            z.literal('rejected'),
            z.literal('deleted'),
            z.literal('cancelled'),
            z.literal('inactive'),
        ])
        .default('draft'),
    summary: z.string().nonempty({message: 'You need to provide a summary'}).max(100),
});
export type ProductDetailsData = z.infer<typeof productDetailsSchema>;
