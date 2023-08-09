import styled from "@emotion/styled";

export const BtnPhone = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  &:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
    .svgIcon {
      width: 50px;
      transition-duration: 0.3s;
      transform: translateY(60%);
    }
    &::before {
      font-size: 13px;
      opacity: 1;
      transform: translateY(30px);
      transition-duration: 0.3s;
    }
  }
  &::before {
    position: absolute;
    top: -20px;
    content: "Delete";
    color: white;
    transition-duration: 0.3s;
    font-size: 2px;
  }
  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
    path {
      fill: white;
    }
  }
`;
