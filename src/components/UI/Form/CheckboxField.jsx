import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useController } from "react-hook-form";
import { P } from "./TextFieldStyles";

const CheckboxField = ({
  control,
  label,
  name,
}) => {
  const {
    field: { ref, onBlur, onChange, checked },
    fieldState:{invalid, error}
  } = useController({
    name,
    control,
  });
  return (
    <>
 <FormControlLabel
      control={
        <Checkbox
          color="success"
          checked={checked}
          onChange={onChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label={label}
    />
    {invalid && <P>{error?.message}</P>}
    </>
   
  );
};

export default CheckboxField;
