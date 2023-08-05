import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../UI/Form/TextField";
import FormWrap from "../UI/FormWrap";
import { schema } from "../../shared/schemaYup/schema";
import { Pstyle } from "../hookForm/HookFormStyles";
import RadioField from "../UI/Form/RadioField";

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
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      radio: [],
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const gender = ["Women", "Men", "Divided"];
  return (
    <FormWrap className="a">
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField control={control} name="firstName" label="First Name" />
        <TextField control={control} name="lastName" label="Last Name" />
        <TextField control={control} name="email" label="E-mail" />
        <TextField control={control} name="age" label="Age" />
        {/* <RadioField
          control={control}
          type="radio"
          name="radio"
          label="Men"
          checked=""
        /> */}
        <RadioField control={control} options={["Women", "Men", "Divided"]} name="radio" type="radio"/>

        <TextField control={control} name="password" label="Password" />
        <TextField
          control={control}
          name="confirmPassword"
          label="Confirm Password"
        />

        <button type="submit" className="btn btn-primary w-100 mx-auto">
          Submit
        </button>
      </form>
    </FormWrap>
  );
};

export default FormBuyerAccount;
