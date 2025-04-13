import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Email must be a valid email address"),
  password: z
    .string()
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]{8,}$/.test(
          value ?? "",
        ),
      "Password must be 8+ characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character",
    ),
  code: z.optional(z.string().length(6, "Code must be 6 characters long")),
});
