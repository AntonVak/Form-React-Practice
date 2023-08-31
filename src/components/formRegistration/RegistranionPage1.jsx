import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrap from "../UI/FormWrap";
import { Container } from "../../shared/constants/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { Form } from "../formAccount/FormAccountStyle";
import TextField from "../UI/Form/TextField";
import { BtnAddPhone } from "../UI/Buttons/ButtonPhoneStyle";
import { Checkbox, FormControlLabel } from "@mui/material";

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const schema = yup
  .object({
    email: yup.string().email().required().matches(emailReg, "E-mail is not valid"),
  })
  .required();

const RegistrationPage1 = () => {
  const navigate = useNavigate();

  const handleStep3Click = () => {
    navigate("/formregister/pg2", { replace: true });
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <FormWrap>
        <Form  onSubmit={handleSubmit(onSubmit)}>
          <TextField control={control} name="email" label="E-mail" />
          <FormControlLabel control={<Checkbox  />} label="Do you have a phone?" name="isPhone"/>
          
          <BtnAddPhone onClick={handleStep3Click}>Step3</BtnAddPhone>
        </Form>
      </FormWrap>
    </Container>
  );
};

export default RegistrationPage1;
