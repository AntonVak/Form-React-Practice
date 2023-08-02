import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "../UI/Form/TextField";
import FormWrap from "../UI/FormWrap";
import { useRef } from "react";

const schema = yup
  .object({
    firstName: yup.string().min(5).required(),
    // lastName: yup
    //   .string()
    //   .min(3)
    //   .max(16)
    //   .matches("password is not valid")
    //   .required(),
    // email: yup.string().required(),
    // age: yup.number().positive().integer().min(18).required,
    // password: yup.string().min(6).max(20).required(),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  })
  .required();

const FormBuyerAccount = () => {
  const ref = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      // lastName: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <FormWrap className="a">
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          ref={ref}
          type="text"
          label="First Name"
          {...register("firstName")}
          // aria-invalid={errors.firstName ? "true" : "false"}
        />
        {/* {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )} */}
        <p>{errors.firstName?.message}</p>

        {/* <TextField
          label="Last Name"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <p>{errors.lastName?.message}</p> */}

        {/* <TextField label="Email" {...register("email")} />

        <TextField label="Age" {...register("age")} />
        <TextField label="Password" {...register("password")} />
        <TextField label="Confirm Password" {...register("confirmPassword")} /> */}

        <button type="submit" className="btn btn-primary w-100 mx-auto">
          Submit
        </button>
      </form>
    </FormWrap>
  );
};

export default FormBuyerAccount;
