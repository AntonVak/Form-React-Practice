import { useController, useForm, useWatch } from "react-hook-form";
import { FieldDiv } from "../../nestedForm/NestedFormStyles";
import { Input, Label } from "./TextFieldStyles";

const Display = ({ control, index }) => {
  const data = useWatch({
    control,
    name: `phNumbers.${index}`,
  });
  console.log(data);
  
};

const NestedField = ({ update, index, value, control, label, name, ...restProps  }) => {
  const { register} = useForm({
    defaultValues: value,
  });
  const {
    field: { ref, onBlur, onChange, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <Display control={control} index={index} />
      <FieldDiv>
        <Input
          className="input"
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          // {...inputProps}
          {...restProps}
          {...register(`phNumbers`)}
        />
        <Label>{label}</Label>
       
      </FieldDiv>
    </div>
  );
};

export default NestedField;
