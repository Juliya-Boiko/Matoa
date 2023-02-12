import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 25px 0;
  font-family: 'Taviraj',serif;
  font-size: 18px;
  line-height: 1.2;
  //letter-spacing: 0.02em;
  border: none;
  outline: none;
  background-color:transparent;
  cursor: pointer;
  
  color: ${p => p.theme.colors.primary};
`;

export const AuthFormOpenBtn = ({ authHandler }) => {
  return (
    <Button onClick={authHandler}>Log In / Register</Button>
  );
};