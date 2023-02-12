import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  /* @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    padding: 14px;
  } */
`;

export const PrevRevBtn = ({ prevHandler, size }) => {
  return (
    <Button type='button' onClick={prevHandler}>
      <BsArrowLeft size={size} />
    </Button>
  );
};