import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrap from "../UI/FormWrap";
import { StyledBox } from "./FormRegisStyles";
import TextField from "../UI/Form/TextField";
import { useAuth } from "../../hooks/useAuth";
import { updateAuthForm } from "../../store/auth/slice";

const schema = yup
  .object({
    firstName: yup
      .string()
      .required()
      .matches(/^([^0-9]*)$/, "No number!")
      .trim("must be not empty")
      .min(3, "must be at least 3 characters long")
      .max(6),
    lastName: yup
      .string()
      .required("Last Name is required")
      .min(4, "min 4 characters")
      .max(16, "max 16 characters"),
  })
  .required();

const FormRegistration = () => {
  const navigate = useNavigate();
  const dispatchFunc = useDispatch();
  const userData = useAuth();

  // const handleStep2Click = () => {
  //   navigate("/formregister/pg1", { replace: true });
  // };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: userData.firstName,
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatchFunc(updateAuthForm(data));
    navigate("/formregister/pg1", { replace: true });
    console.log(data);
    console.log(userData);
  };

  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField control={control} name="firstName" label="First Name" />
        <TextField control={control} name="lastName" label="Last Name" />

        <button type="submit">Next</button>
      </form>
    </FormWrap>
  );
};

export default FormRegistration;
