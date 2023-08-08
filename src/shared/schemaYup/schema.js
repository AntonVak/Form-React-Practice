import * as yup from "yup";

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
export const schema = yup
    .object({
      firstName: yup
        .string()
        .required("First Name is required")
        .min(3, "min 3 characters"),
      lastName: yup
        .string()
        .required("Last Name is required")
        .min(4, "min 4 characters")
        .max(16, "max 16 characters"),
      email: yup.string().required().matches(emailReg, "E-mail is not valid"),
      age: yup.number().required().positive().integer().min(18),
      password: yup.string().required().min(6).max(20),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    })
    .required();

//
