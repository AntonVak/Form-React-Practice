import { useController } from "react-hook-form";
import { FieldDiv, Input, Label, P } from "./TextFieldStyles";

const TextField = ({ label, name, control, type, ...restProps }) => {
  const {
    field: { ref, onBlur, onChange,  ...inputProps },
    fieldState: { invalid, error },
    
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
        type={type}
        {...inputProps}
        {...restProps}
        
      />
      <Label>{label}</Label>
      {invalid && <P>{error?.message}</P>}
      {/* {inputProps.value === "" && <span>This is empty</span>}
      {error && error.type === "required" && <span>This is required</span>} */}
    </FieldDiv>
  );
};

export default TextField;
