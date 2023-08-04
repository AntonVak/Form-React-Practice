import { useForm, useWatch } from "react-hook-form";
import FormWrap from "../UI/FormWrap";
import { FieldDiv, Input, Label, Pstyle } from "./HookFormStyles";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, dirtyFields, isDirty, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
    },
    mode: 'onTouched',
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const regexp = /^\S+@\S+\.\S+$/g;
  // pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldDiv>
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
        </FieldDiv>

        <FieldDiv>
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
        </FieldDiv>
        <input type="submit" />
      </form>
    </FormWrap>
  );
};

export default HookForm;
