import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormWrap from "../UI/FormWrap";
import { TextField } from "@mui/material";
import { StyledBox } from "./FormRegisStyles";
import {useParams} from "react-router-dom"



const RegistrationPage2 = () => {
 const {pg2} = useParams()
  return (
    <FormWrap>
      <StyledBox component="form" noValidate autoComplete="off">
      RegistrationPage2 = {pg2}
      </StyledBox>
    </FormWrap>
  );
};

export default RegistrationPage2;
