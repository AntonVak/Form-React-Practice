import { TextField } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
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
      uncontrolled: [],
      select: {},
      // phNumbers: [{ value: "1" }, { value: "2" }],
    },
    mode: "onTouched",
  });
  const { fields, remove, append, update } = useFieldArray({
    name: "phoneNumbers",
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

        <input {...register("radio")} type="radio" value="A"  label="111" />
      <input {...register("radio")} type="radio" value="B" />
      <input {...register("radio")} type="radio" value="C" />

      <input type="radio" id="contactChoice3" name="contact" value="mail" />
    <label >Mail</label>

        <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

        <section>
        <h2>uncontrolled</h2>
        <input {...register("uncontrolled")} type="checkbox" value="weqeq" />
        <input {...register("uncontrolled")} type="checkbox" value="B" />
        <input {...register("uncontrolled")} type="checkbox" value="C" />
      </section>
        {/* ************************************************************** */}
        {/* <Controller
          render={({ field }) => <input {...field} />}
          name="firstName"
          control={control}
          defaultValue=""
        /> */}
        {/* ************************************************************** */}
        {fields.map((field, index) => (
          <div>
            <Edit
              key={field.id}
              control={control}
              update={update}
              index={index}
              value={field}
              type="number"
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            append({ phoneNumbers: "" });
          }}
        >
          append
        </button>
      </form>
    </FormWrap>
  );
};

export default HookForm;
