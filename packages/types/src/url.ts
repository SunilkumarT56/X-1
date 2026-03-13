import { z } from "zod"

export const CreateUrlSchema = z.object({
  originalUrl: z.string().url(),
  customSlug: z.string().min(3).max(20).optional(),
  expiresAt: z.date().optional(),
})

export const UrlRecordSchema = z.object({
  id: z.string(),
  slug: z.string(),
  originalUrl: z.string().url(),
  userId: z.string().nullable(),
  clicks: z.number().default(0),
  createdAt: z.date(),
  expiresAt: z.date().nullable(),
})

export type CreateUrlInput = z.infer<typeof CreateUrlSchema>
export type UrlRecord = z.infer<typeof UrlRecordSchema>
