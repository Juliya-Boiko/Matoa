import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-family: 'Taviraj',serif;
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.accentOrange};
  color: ${p => p.theme.colors.secondary};
  cursor: pointer;

  /* @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    margin-top: 50px;
    padding: 15px 25px;
    font-size: 20px;
  } */
`;

export const AuthFormSubmitBtn = ({ title }) => {
  return (
    <Button type="button">
      {title}
    </Button>
  );
};