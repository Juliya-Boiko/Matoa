import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 15px 0 0 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px 0;
`;

export const OpenMenuBtn = styled.button`
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

export const OpenBasketBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px;
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.bgSecondary};
  border-radius: 50%;
  cursor: pointer;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
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

export const SearchBtn = styled.button`
  display: none;
  opacity: 0;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: red;
  background-color: transparent;
  cursor: pointer;
`;