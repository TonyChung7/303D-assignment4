// validation/employeeSchema.ts
import * as Yup from "yup";

export const employeeSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number")
    .required("Phone is required"),
  position: Yup.string().trim().required("Position is required"),
  employeeId: Yup.string()
    .trim()
    .min(4, "Employee ID must be at least 4 chars")
    .max(12, "Employee ID must be at most 12 chars")
    .required("Employee ID is required"),
});
