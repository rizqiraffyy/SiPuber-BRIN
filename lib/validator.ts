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
const PasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"]
});
const RoleSchema = z.enum(["USER", "STAKEHOLDER", "ADMIN"], {
  errorMap: () => ({ message: "Role must be one of: USER, STAKEHOLDER, ADMIN" }),
});

const generateToken = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString();
  const tokenSuffix = process.env.TOKEN_SUFFIX;
  return `${day}${month}${year}${tokenSuffix}`;
};

const UnsurValues = ["co", "so2", "no2", "o3", "nh3", "pm1", "pm25", "pm10"] as const;
const unsurSchema = z.enum(UnsurValues, {
  errorMap: () => ({ message: "Invalid column name provided for unsur" }),
})

// api/parameter
export const paramsSchema = z.object({
  location: z
  .string()
  .min(1, "Location is required")
  .regex(
    /^SRID=4326;POINT\([-]?\d+(\.\d+)?\s[-]?\d+(\.\d+)?\)$/,
    "Location must be in valid WKT format, e.g., SRID=4326;POINT(107.6691 -6.9175)"
  ),
  unsur: unsurSchema,
  time: z.enum(["one-day", "one-week", "one-month"], {
    errorMap: () => ({ message: "Time must be one-day, one-week, or one-month" }),
  }),
});
// api/data-sipuber
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
  v_bat: z.number(),
  token: z.string().refine((val) => val === generateToken(), {
    message: `Invalid token.`,
  }),
});
// {"username":"testuser",
// "full_name":"Test User",
// "email":"test@example.com",
// "password":{"password":"Test123","confirmPassword":"Test123"}}
export const registerSchema = z.object({
  username: UsernameSchema,
  full_name: FullNameSchema,
  email: EmailSchema,
  password: PasswordSchema,
  role: RoleSchema.optional().default("USER"),
});
export const loginSchema = z.object({
  email: EmailSchema,
  password: z
  .string()
  .min(6, "Password must be at least 6 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number"),
});
// api/user
export const roleSchema = z.object({
  role: RoleSchema
})


