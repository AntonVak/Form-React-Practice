import { useController } from "react-hook-form";
import { FieldDiv, Input, Label } from "./TextFieldStyles";

const TextField = ({ label, name, control, ...restProps }) => {
  const {
    field: { ref, onBlur, onChange, ...inputProps },
    fieldState: { invalid, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });
  return (
    <FieldDiv>
      <Input
        className="input"
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        {...inputProps}
        {...restProps}
      />
      <Label>{label}</Label>
      {invalid && <span>{error?.message}</span>}
    </FieldDiv>
  );
};

export default TextField;
