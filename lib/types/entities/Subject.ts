import z from "zod";

export const subjectSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(5),
});

export type Subject = z.infer<typeof subjectSchema>;
