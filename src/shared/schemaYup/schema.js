import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required("FirstName is required").min(3, "min 3 characters"),
    lastName: yup
      .string()
      .min(3, "min 3 characters" )
      .max(16, "max 16 characters")
      .matches("password is not valid")
      .required("LastName is required"),
    // email: yup.string().required(),
    // age: yup.number().positive().integer().min(18).required,
    // password: yup.string().min(6).max(20).required(),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  })
  .required();