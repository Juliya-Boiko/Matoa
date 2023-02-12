import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  font-family: 'Taviraj',serif;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.accentOrange};
  background-color:transparent;
  cursor: pointer;
`;

export const AuthFormToggleBtn = ({ toggleForm, isRegister }) => {
  return (
    <Button onClick={toggleForm}>
      {isRegister ? "Dont have account" : "Already have account"}
    </Button>
  );
};