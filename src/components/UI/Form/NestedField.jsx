import { Checkbox, FormControlLabel } from "@mui/material";
import { useController, useForm, useWatch } from "react-hook-form";
import { FieldDiv } from "../../nestedForm/NestedFormStyles";
import { Input, Label } from "./TextFieldStyles";

const NestedField = ({
  control,
  label,
  name,
}) => {
  
  const {
    field: { ref, onBlur, onChange, checked },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            color="success"
            checked={checked}
            onChange={onChange}
            ref={ref}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default NestedField;
