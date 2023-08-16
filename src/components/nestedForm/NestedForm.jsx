import { useFieldArray, useForm } from "react-hook-form";
import Edit from "../UI/Form/EditField";
import NestedField from "../UI/Form/NestedField";
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
    reset();
  };

  return (
    <FormWrap>
    <h1>Nested Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       <NestedField  control={control}  name="checkBox" label="Confirm"/>
       <NestedField  control={control}  name="checkBox" label="Confirm"/>
       <NestedField  control={control}  name="checkBox" label="Confirm"/>

        
      </form>
    </FormWrap>
  );
};

export default NestedForm;
