import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: white;
  width: 60%;
  height: auto;
  margin: 2rem;

  @media screen and (max-width: 468px) {
    padding: .5rem;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  } 
`;

export const WrapCardMeal = styled(FormWrapper)`
display: flex;
`;
