import styled from "styled-components";
import SearchIcon from '../../images/icons/search.svg'

const Button = styled.button`
  display: none;
  opacity: 0;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchBtn = ({ searchHandler, width, height }) => {
  return (
    <Button type='button' onClick={searchHandler}>
      <img src={SearchIcon} width={width} height={height} alt="Search icon" />
    </Button>
  );
};