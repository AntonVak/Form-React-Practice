import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrap from "../UI/FormWrap";

const schema = yup
  .object({
    firstName: yup.string().trim('must be not empty').min(3, 'must be at least 3 characters long').max(6).required(),
    age: yup.number().positive().integer().min(18,'must be not empty').required(),
  })
  .required();

const FormRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        firstName: "",
        age: "",
      },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <FormWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", {onblur: true})} />
        <p>{errors.firstName?.message}</p>

        <input {...register("age")} />
        <p>{errors.age?.message}</p>

        <input type="submit" />
      </form>
    </FormWrap>
  );
};

export default FormRegistration;
