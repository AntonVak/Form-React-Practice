import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrap from "../UI/FormWrap";
import { StyledBox } from "./FormRegisStyles";
import TextField from "../UI/Form/TextField";

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

  const handleStep2Click = () => {
    navigate("/formregister/pg1", { replace: true });
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField control={control} name="firstName" label="First Name" />
        <TextField control={control} name="lastName" label="Last Name" />

        <button onClick={handleStep2Click} type="submit">
          Step2
        </button>
      </form>
    </FormWrap>
  );
};

export default FormRegistration;
