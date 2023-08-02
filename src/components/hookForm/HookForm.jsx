import { useForm } from "react-hook-form";
import FormWrap from "../UI/FormWrap";
import { FieldDiv, Input, Label, Pstyle } from "./HookFormStyles";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldDiv>
          <Input
            {...register("firstName", {
              onblur: true,
              required: {
                value: true,
                message: "FirstName is required",
              },
            })}
          />
          <Label htmlFor="firstName">First Name </Label>
          <Pstyle>{errors.firstName?.message}</Pstyle>
        </FieldDiv>

        <FieldDiv>
          <Input {...register("email")} />
          <Label>E-mail</Label>
          <p>{errors.email?.message}</p>
        </FieldDiv>
        <input type="submit" />
      </form>
    </FormWrap>
  );
};

export default HookForm;
