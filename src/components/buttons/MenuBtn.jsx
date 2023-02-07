import styled from "styled-components";
import { theme } from "../../style/theme";
import { CgMenuGridO } from "react-icons/cg";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  /* &:hover {
    border-radius: 50%;
    background-color: ${p => p.theme.colors.bgSecondary};
  } */
`;

export const MenuBtn = ({ menuHandler }) => { 
  return (
    <Button type="button" onClick={menuHandler}>
      <CgMenuGridO color={theme.colors.primaryAddictional} size={40} />
    </Button>
  );
};