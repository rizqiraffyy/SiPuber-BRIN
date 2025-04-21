import { z } from "zod";

const UsernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be less than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain alphanumeric characters and underscores");

const FullNameSchema = z
  .string()
  .trim()
  .min(5, "Full name must be at least 5 characters")
  .max(50, "Full name must be less than 50 characters")
  .regex(/^[a-zA-Z\s'-]+$/, "Full name can only contain letters, spaces, hyphens, and apostrophes");

const EmailSchema = z
  .string()
  .email("Invalid email address")
  .min(4, "Email must be at least 4 characters")
  .max(100, "Email must be less than 100 characters");

const PasswordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");

const RoleSchema = z.enum(["USER", "STAKEHOLDER", "ADMIN"], {
  errorMap: () => ({ message: "Role must be one of: USER, STAKEHOLDER, ADMIN" }),
});

export const siPuberSchema = z.object({
  device_name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  pm1: z.number(),
  pm10: z.number(),
  pm25: z.number(),
  co: z.number(),
  so2: z.number(),
  no2: z.number(),
  o3: z.number(),
  nh3: z.number(),
  // ispu_realtime: z.number(),
  v_bat: z.number()
});


export const registerSchema = z.object({
  username: UsernameSchema,
  full_name: FullNameSchema,
  email: EmailSchema,
  password: PasswordSchema,
  role: RoleSchema.optional().default("USER"),
});

export const loginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export const roleSchema = z.object({
  role: RoleSchema
})


