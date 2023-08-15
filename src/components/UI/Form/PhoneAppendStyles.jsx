import styled from "@emotion/styled";

export const FieldDiv = styled.div`
position: relative;
margin-bottom: 1.6rem;
width: 100%;

`;
export const Input = styled.input`
border: solid 1.5px #9e9e9e;
border-radius: 1rem;
background: none;
padding: .7rem;
font-size: 1.3rem;
width: 100%;
color: #636363;
transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:valid {
    outline: none;
    border: solid .5px #1a73e8;
  } 
  .input:focus ~ label,
  &:valid ~ label {
    transform: translateY(-50%) scale(1);
    background-color: white;
    padding: 0 .3em;
    color: #2196f3;
    /* outline: none; */
    /* border: solid .5px #1a73e8; */
  }
 

`;

export const Label = styled.label`
position: absolute;
left: 35px;
color: #e8e8e8;
pointer-events: none;
transform: translateY(1rem);
/* transition: border 150ms cubic-bezier(0.4, 1, 0.2, 1); */
`;
export const P = styled.p`
color: red;
margin-top: .5rem;

`;



export const Container = styled.div`
  width: min(100% - 4rem, 75rem);
  margin-inline: auto;

  /* @media screen and (max-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 468px) {
    width: 1280px;
  } */
`;


