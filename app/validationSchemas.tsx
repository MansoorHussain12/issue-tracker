import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required.").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "assignedToUser is required.")
    .max(255)
    .optional()
    .nullable(),
});

export const commentSchema = z.object({
  content: z.string().min(1).max(3000),
  issueId: z.number(),
  userId: z.string(),
});
