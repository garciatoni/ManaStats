import { z } from "zod";

export const registerUserSchema = z.object({
  username: z.string().nonempty("errors.usernameRequired").min(3, "errors.usernameTooShort"),
  email: z.string().nonempty("errors.emailRequired").email("errors.invalidEmail"),
  password: z.string().nonempty("errors.passwordRequired").min(8, "errors.passwordTooShort"),
  password2: z.string().nonempty("errors.password2Required"),
}).refine((data) => data.password === data.password2, {
  message: "errors.passwordsNotSame",
  path: ["password2"],
});


export const signInSchema = z.object({
  email: z.string().nonempty("errors.emailRequired").email("errors.invalidEmail"),
  password: z.string().nonempty("errors.passwordRequired"),
});