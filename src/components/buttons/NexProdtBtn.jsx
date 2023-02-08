import styled from "styled-components";
import NextIcon from '../../images/icons/next.svg'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.accentOrange};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    padding: 14px;
  }
`;

export const NextProdBtn = ({ nextHandler, width, height }) => {
  return (
    <Button type='button' onClick={nextHandler}>
      <img src={NextIcon} width={width} height={height} alt="Next icon" />
    </Button>
  );
};