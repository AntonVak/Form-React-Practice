import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrap from "../UI/FormWrap";
import { Button, TextField } from "@mui/material";
import { StyledBox } from "./FormRegisStyles";
import { useParams } from "react-router-dom";
import FileInput from "../UI/Form/FileInput";
import { Form } from "../formAccount/FormAccountStyle";

const RegistrationPage2 = () => {
  const { pg2 } = useParams();

  const { control, handleSubmit } = useForm({
    // defaultValues: {
    //   files: "",
    // },
    // mode: "onTouched",
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <FormWrap>
      <StyledBox component="form" noValidate autoComplete="off">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FileInput control={control} name="files" />
          <Button variant="contained" size="small">Next</Button>
        </Form>
      </StyledBox>
    </FormWrap>
  );
};

export default RegistrationPage2;
