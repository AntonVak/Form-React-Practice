import { forwardRef } from "react";
import { FieldDiv, Input, Label } from "./TextFieldStyles";

const TextField = forwardRef(function TextField ({label},ref ){
  return (
    <FieldDiv>
      <Input className="input" ref={ref} />
      <Label >{label}</Label>
    </FieldDiv>
  );
}) 

export default TextField;
