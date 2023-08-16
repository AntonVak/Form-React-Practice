import { useState } from "react";
import { useController } from "react-hook-form";

import { RadioDiv } from "./RadioFieldStyles";




const RadioField = ({ label, type, name, options, control, ...restProps }) => {
    const { 
        field
     } = useController({
        control,
        name
      });
      const [value, setValue] = useState(field.value || []);

  return (
    <RadioDiv >
     {options && options.map((option, index) => (
        <input
          onChange={(e) => {
            const valueCopy = [...value];

            // update checkbox value
            valueCopy[index] = e.target.checked ? e.target.value : null;

            // send data to react hook form
            field.onChange(valueCopy);

            // update local state
            setValue(valueCopy);
          }}
          key={option}
          checked={value.includes(option)}
          type="checkbox"
          value={option}
        />
      ))}
      <label>
        
        <span>{label}</span>
      </label>
    </RadioDiv>
  );
};

export default RadioField;
