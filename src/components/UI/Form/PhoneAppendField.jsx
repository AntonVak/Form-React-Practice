import { useController, useForm, useWatch } from "react-hook-form";
import { FieldDiv, Input, Label, P } from "./PhoneAppendStyles";

const Display = ({ control, index }) => {
  const data = useWatch({
    control,
    name: `phNumbers.${index}`,
  });
  return <p>{data?.phNumbers}</p>;
};

const PhoneAppendField = ({ label, name, control, index, value }) => {
  const { register } = useForm({
    defaultValues: value,
  });
  // const {
  //   fieldState: { invalid, error },
  // } = useController({
  //   name,
  //   control,
  // });

  return (
    <>
      <Display control={control} index={index} />
      <FieldDiv>
        <Input className="input" {...register(`phNumbers`)} />
        <Label className="user-label">{label}</Label>
        {/* {invalid && <P>{error?.message}</P>} */}
      </FieldDiv>
    </>
  );
};

export default PhoneAppendField;
