import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../UI/Form/TextField";
import FormWrap from "../UI/FormWrap";
import { userSchema } from "../../shared/schemaYup/schema";
import RadioField from "../UI/Form/RadioField";
import { DivPhone, Form, H1 } from "./FormAccountStyle";
import ButtonPhone from "../UI/Buttons/ButtonPhone";
import PhoneAppendField from "../UI/Form/PhoneAppendField";
import { BtnAddPhone, BtnPhone } from "../UI/Buttons/ButtonPhoneStyle";
import ButtonAddPhone from "../UI/Buttons/ButtonAddPhone";


import CheckboxField from "../UI/Form/CheckboxField";

let renderCount = 0;

const FormBuyerAccount = () => {
  
  const {
    handleSubmit,
    reset,
    control,
    // register,
    // getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      // lastName: "",
      // email: "",
      // age: "",
      // password: "",
      // confirmPassword: "",
      // radio: [],
      // phNumbers: [{ number: "" }],
      // dateBd: new Date(),
      // myCheckbox: false,
    },
    mode: "onTouched",
    resolver: yupResolver(userSchema),
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "phNumbers",
  });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
    
  };
  const handleGetValue = (params) => {
    // console.log("Get value", getValues(['firstName']));
  };

  // const gender = ["Women", "Men", "Divided"];
  renderCount++;

  return (
    <FormWrap className="a">
      <H1> Account ({renderCount / 2})</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField control={control} name="firstName" label="First Name" />
        {/* <TextField control={control} name="lastName" label="Last Name" />
        <TextField control={control} name="email" label="E-mail" />
        <TextField control={control} name="age" label="Age" type="number" /> */}
        {/* <RadioField
          control={control}
          type="radio"
          name="radio"
          label=""
          checked=""
          options={["a", "b", "c"]}
        /> */}

        {/* <TextField control={control} name="password" label="Password" />
        <TextField
          control={control}
          name="confirmPassword"
          label="Confirm Password"
        /> */}
        {/* <>
          {fields.map((field, index) => (
            <DivPhone key={field.id}>
              <PhoneAppendField
                control={control}
                update={update}
                index={index}
                value={field}
                type="number"
                label={
                  index === 0 ? "Phone number" : `Phone number ${index + 1}`
                }
              />
              {index > 0 && <ButtonPhone onClick={() => remove(index)} />}
            </DivPhone>
          ))}
          <ButtonAddPhone
            onClick={() => {
              append({ phNumbers: "" });
            }}
          />
        </> */}
        {/* <TextField
          control={control}
          name="dateBd"
          label="Date of BD"
          type="date"
          valueAsDate="true"
        /> */}
        {/* <CheckboxField control={control} name="myCheckbox" label="Confirm" /> */}
        <BtnAddPhone type="submit" >Submit</BtnAddPhone>
        {/* <BtnAddPhone onClick={handleGetValue}>Get Value</BtnAddPhone> */}
      </Form>
    </FormWrap>
  );
};

export default FormBuyerAccount;
