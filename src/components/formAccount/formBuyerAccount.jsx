import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../UI/Form/TextField";
import FormWrap from "../UI/FormWrap";
import { schema } from "../../shared/schemaYup/schema";
import { Pstyle } from "../hookForm/HookFormStyles";

const FormBuyerAccount = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <FormWrap className="a">
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField control={control} name="firstName" label="First Name" />
        {/* <Pstyle>{errors.firstName?.message}</Pstyle> */}

        <TextField control={control} name="lastName" label="Last Name" />
        {/* <p>{errors.lastName?.message}</p> */}

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
