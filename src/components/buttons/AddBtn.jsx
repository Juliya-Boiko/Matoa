import AddIcon from '../../images/icons/add-cart.svg';
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 0;
  font-family: 'Taviraj',serif;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  border: none;
  outline: none;
  background-color: ${p => p.theme.colors.accentOrange};
  color: ${p => p.theme.colors.secondary};
  cursor: pointer;
  span {
    display: none;
    @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
      display: inline-block;
      margin: 0 0 0 13px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakPoints.tablet}) {
    margin-top: 50px;
    padding: 15px 25px;
    font-size: 20px;
  }
`;

export const AddBtn = ({ action, width, height }) => {
  return (
    <Button type="button" onClick={action}>
      <img src={AddIcon} width={width} height={height} alt="Add icon" />
      <span>Add to order</span>
    </Button>
  );
};