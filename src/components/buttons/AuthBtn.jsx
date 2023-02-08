import UserIcon from '../../images/icons/user.svg';
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Taviraj',serif;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  border: none;
  outline: none;
  background-color:transparent;
  cursor: pointer;
  
  color: ${p => p.theme.colors.primary};

  span {
    margin: 0 0 0 8px;
  }
`;

export const AuthBtn = ({ authHandler, width, height }) => {
  return (
    <Button type="button" onClick={authHandler}>
      <img src={UserIcon} width={width} height={height} alt="Log in icon" />
      <span>Log In</span>
    </Button>
  );
};