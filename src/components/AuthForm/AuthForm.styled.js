import styled from "styled-components";


export const MenuAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
`;

export const MenuAuthInput = styled.input`
  padding: 8px 0;
  margin: 0 0 15px 0;
  outline: none;
  border: none;
  border-bottom: 0.3px solid #333333;
  background-color: transparent;

  &::placeholder {
    color: ${p => p.theme.colors.primaryAddictionalLight};
  }
`;