import { useFieldArray, useForm } from "react-hook-form";
import Edit from "../UI/Form/EditField";
import NestedField from "../UI/Form/NestedField";
import TextField from "../UI/Form/TextField";
import FormWrap from "../UI/FormWrap";
import { FieldDiv, Input, Label, Pstyle } from "./NestedFormStyles";

const NestedForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      checkBox: false,
      
    },
    mode: "onTouched",
  });

  const { fields, remove, append, update } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <FormWrap>
    <h1>Nested Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       <NestedField  control={control}  name="checkBox" label="Confirm"/>
       <TextField control={control} name="firstName" label="First Name" />

        <button type="submit">Submit</button>
      </form>
    </FormWrap>
  );
};

export default NestedForm;
