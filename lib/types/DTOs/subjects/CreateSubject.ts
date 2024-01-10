import z from "zod";

const createSubjectSchema = z.object({
  name: z.string(),
});

export type CreateSubjectSchema = z.infer<typeof createSubjectSchema>;
