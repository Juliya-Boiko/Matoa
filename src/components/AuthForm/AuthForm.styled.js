import styled from "styled-components";

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const MenuAuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px 0;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    width: 500px;
  }
`;

export const MenuAuthInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 0;
  margin: 0 0 25px 0;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 0.3px solid #333333;
  background-color: transparent;

  &::placeholder {
    color: ${p => p.theme.colors.primaryAddictionalLight};
  }
`;