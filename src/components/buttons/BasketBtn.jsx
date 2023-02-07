import BasketIcon from '../../images/icons/basket.svg';
import styled from "styled-components";

const Button = styled.button`
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

export const BasketBtn = ({ basketHandler, width, height}) => { 
  return (
    <Button type="button" onClick={basketHandler}>
      <img src={BasketIcon} width={width} height={height} alt="Basket icon" />
    </Button>
  );
};