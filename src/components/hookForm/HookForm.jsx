import { useForm } from "react-hook-form";
import FormWrap from "../UI/FormWrap";
import { FieldDiv, Input, Label } from "./HookFormStyles";

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
        
          <Input {...register("firstName", { onblur: true })} />
          <Label >label</Label>
          <p>{errors.firstName?.message}</p>
        </FieldDiv>

        <FieldDiv>
          <Input {...register("email")} />
          <Label >label</Label>
          <p>{errors.email?.message}</p>
        </FieldDiv>
        <input type="submit" />
      </form>
    </FormWrap>
  );
};

export default HookForm;
