import { useState } from "react";
import { Container } from 'components/common/containers.styled';
import { HeaderContainer } from './Header.styled';
import { Basket } from 'components/Basket/Basket';
import { HeaderCompact } from './HeaderCompact/HeaderCompact';
import { HeaderFull } from './HeaderFull/HeaderFull';
import { useSelector } from "react-redux";

export const Header = () => {
  const data = useSelector(state => state);
  console.log(data);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const openBasket = () => {
    setIsBasketOpen(true);
  };

  const closeBasket = () => {
    setIsBasketOpen(false);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderCompact basketHandler={openBasket} />
        <HeaderFull basketHandler={openBasket}/>
        {isBasketOpen? <Basket closeBasket={closeBasket} /> : null}
      </HeaderContainer>
    </Container>
  );
};