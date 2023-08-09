import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../UI/Form/TextField";
import FormWrap from "../UI/FormWrap";
import { schema } from "../../shared/schemaYup/schema";
import RadioField from "../UI/Form/RadioField";
import { H1 } from "./FormAccountStyle";

let renderCount = 0;

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
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phNumbers",
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onAddNumber = () => {
    append()
  }
  const onRemoveNumber = () => {
    remove()
  }
  const gender = ["Women", "Men", "Divided"];
  renderCount++;

  return (
    <FormWrap className="a">
      <H1 className="mb-4"> Account ({renderCount / 2})</H1>
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
        <RadioField
          control={control}
          options={["Women", "Men", "Divided"]}
          name="radio"
          type="radio"
        />

        <TextField control={control} name="password" label="Password" />
        <TextField
          control={control}
          name="confirmPassword"
          label="Confirm Password"
        />
        <div>
          {fields.map((field, idx) => (
            <TextField
              key={field.id}
              control={control}
              name={`phNumbers.${idx}.number`}
              label="Phone Number"
            />
          ))}
          <button onClick={onAddNumber } type="submit">Add phoneNumbers</button>
        </div>

        <button type="submit" className="btn btn-primary w-100 mx-auto">
          Submit
        </button>
      </form>
    </FormWrap>
  );
};

export default FormBuyerAccount;
