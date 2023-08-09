import { useFieldArray, useForm } from "react-hook-form";
import Edit from "../UI/Form/EditField";
import FormWrap from "../UI/FormWrap";
import { FieldDiv, Input, Label, Pstyle } from "./HookFormStyles";

const HookForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      // phNumbers: [{ value: "1" }, { value: "2" }],
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
  const regexp = /^\S+@\S+\.\S+$/g;
  // pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <FieldDiv>
          <Input
            {...register("firstName", {
              minLength: {
                value: 3,
                message: "min 3 characters",
              },
              required: "FirstName is required",
            })}
          />
          <Label htmlFor="firstName">First Name </Label>
          <Pstyle>{errors.firstName?.message}</Pstyle>
        </FieldDiv> */}

        {/* <FieldDiv>
          <Input
            {...register("email", {
              required: "E-mail is required",
              pattern: {
                value: regexp,
                message: "Invalid Email format",
              },
            })}
          />
          <Label>E-mail</Label>
          <Pstyle>{errors.email?.message}</Pstyle>
        </FieldDiv> */}

        {/* <FieldDiv>
          <Input
            {...register("phNumbers")}
          />
          <Label>Phone Number</Label>
        </FieldDiv>
        <input type="submit" /> */}
        {/* ************************************************************** */}
        {/* {fields.map((field, i) => (
          <div>
            <input key={field.id} {...register(`phNumbers.${i}.value`)} />
            <button type="button" onClick={() => remove(i)}>
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            append({ value: "" }, { focusName: "phNumbers.0.value" })
          }
        >
          append
        </button> */}
        {/* ************************************************************** */}
        {fields.map((field, index) => (
          <div>
            <Edit
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
            append({ phNumbers: "" });
          }}
        >
          append
        </button>
      </form>
    </FormWrap>
  );
};

export default HookForm;
