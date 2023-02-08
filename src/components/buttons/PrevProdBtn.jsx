import styled from "styled-components";
import PrevIcon from '../../images/icons/prev.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 13px 0 0;
  padding: 2px;
  border: none;
  outline: 2px solid ${p => p.theme.colors.accentOrange};
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    padding: 12px;
  }
`;

export const PrevProdBtn = ({ prevHandler, width, height }) => {
  return (
    <Button type='button' onClick={prevHandler}>
      <img src={PrevIcon} width={width} height={height} alt="Next icon" />
    </Button>
  );
};