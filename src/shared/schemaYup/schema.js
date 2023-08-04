import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required("First Name is required").min(3, "min 3 characters"),
    lastName: yup
      .string()
      .required("Last Name is required")
      .min(4, "min 4 characters" )
      .max(16, "max 16 characters")
      .matches("password is not valid")
     
      
    // email: yup.string().required(),
    // age: yup.number().positive().integer().min(18).required,
    // password: yup.string().min(6).max(20).required(),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  })
  .required();