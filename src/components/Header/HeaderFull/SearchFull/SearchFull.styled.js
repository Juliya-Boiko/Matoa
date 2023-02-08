import styled from "styled-components";

export const FullForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullInput = styled.input`
  width: 150px;
  padding: 0 0 5px 0;
  text-align: center;
  border: none;
  border-bottom: 0.3px solid ${p => p.theme.colors.primary};
  outline: none;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    width: 100%;
    & + button {
      display: flex;
      opacity: 1;
    }
  }
`;