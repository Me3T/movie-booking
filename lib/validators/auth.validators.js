const { z } = require("zod");

const userSignupValidationSchema = z.object({
  firstName: z.string().min(2).max(25),
  lastName: z.string().min(2).max(25).optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

const userSigninValidationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

module.exports = { userSignupValidationSchema, userSigninValidationSchema };
