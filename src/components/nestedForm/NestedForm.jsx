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
      firstName: [],
      // phNumbers: [],
      phNumbers: [{ number: "" }],
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div>
            <NestedField
              name="phNumbers"
              label="Phone number"
              key={field.id}
              control={control}
              update={update}
              index={index}
              value={field}
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            append({ phNumbers: ""}, { firstName: ""});
          }}
        >
          append
        </button>
      </form>
    </FormWrap>
  );
};

export default NestedForm;
