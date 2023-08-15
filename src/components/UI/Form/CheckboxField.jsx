import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const CheckboxField = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="success"
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Confirm"
    />
  );
};

export default CheckboxField;
