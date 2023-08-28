import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrap from "../UI/FormWrap";
import { Container } from "../../shared/constants/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { Form } from "../formAccount/FormAccountStyle";
import TextField from "../UI/Form/TextField";
import { BtnAddPhone } from "../UI/Buttons/ButtonPhoneStyle";

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const schema = yup
  .object({
    email: yup.string().required().matches(emailReg, "E-mail is not valid"),
  })
  .required();

const RegistrationPage1 = () => {
  const navigate = useNavigate();

  const handleStep3Click = () => {
    navigate("/formregister/pg2", { replace: true });
  };

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <FormWrap>
        <Form  onSubmit={handleSubmit(onSubmit)}>
          <TextField control={control} name="email" label="E-mail" />
          <BtnAddPhone onClick={handleStep3Click}>Step3</BtnAddPhone>
        </Form>
      </FormWrap>
    </Container>
  );
};

export default RegistrationPage1;
