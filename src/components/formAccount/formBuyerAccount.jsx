import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../UI/Form/TextField";
import FormWrap from "../UI/FormWrap";
import { schema } from "../../shared/schemaYup/schema";
import RadioField from "../UI/Form/RadioField";
import { DivPhone, H1 } from "./FormAccountStyle";
import ButtonPhone from "../UI/Buttons/ButtonPhone";

let renderCount = 0;

const FormBuyerAccount = () => {
  const {
    handleSubmit,
    reset,
    control,
    register,
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
      // phoneNumbers: ["",""],
      phNumbers: [{ number: "" }],
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "phNumbers",
  });
  console.log(fields);

  const onSubmit = (data) => {
    reset();
  };

  // const gender = ["Women", "Men", "Divided"];
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
        <>
          {fields.map((field, index) => (
            <DivPhone key={field.id}>
              <TextField
                control={control}
                // update={update}
                // index={index}
                // value={field}
                name={`phNumbers.${index}.number`}
                label="Phone Number"
              />
              {/* <input type="text" {...register(`phNumbers.${index}.number`)} /> */}
              {index > 0 && (
                <ButtonPhone
                  onClick={() => remove(index)}
                  type="button"
                ></ButtonPhone>
              )}
            </DivPhone>
          ))}
          <button
            onClick={() => {
              append();
            }}
            type="button"
          >
            Add phoneNumbers
          </button>
        </>

        <button type="submit" className="btn btn-primary w-100 mx-auto">
          Submit
        </button>
      </form>
    </FormWrap>
  );
};

export default FormBuyerAccount;
