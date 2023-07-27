import { FieldDiv, Input, Label } from "./TextFieldStyles";

const TextField = () => {
  return (
    <FieldDiv>
      <Input className="input" type="text" name="name" />
      <Label htmlFor="name">Name</Label>
      
    </FieldDiv>
  );
};

export default TextField;
