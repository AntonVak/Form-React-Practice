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
  const regexp =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldDiv>
          <Input
            {...register("firstName", {
              minLength: 3,
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
          <Input
            {...register("email", {
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
