import {  FormWrapper } from "./FormWrap.styled";

const FormWrap = (props) => {
    return (
        <FormWrapper>
            {props.children}
        </FormWrapper>
    )
}

export default FormWrap;