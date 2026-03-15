// validation/authSchemas.ts
import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Min length is 6")
    .required("Password is required"),
});

export const signUpSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Too short")
    .required("Full name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Min length is 6")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});
