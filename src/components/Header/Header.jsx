import { useState } from "react";
import { Container } from 'components/common/containers.styled';
import { HeaderContainer } from './Header.styled';
import { Basket } from 'components/Basket/Basket';
import { HeaderCompact } from './HeaderCompact/HeaderCompact';
import { HeaderFull } from './HeaderFull/HeaderFull';

export const Header = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const basketHandler = () => {
    setIsBasketOpen(prevState => !prevState);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderCompact basketHandler={basketHandler} />
        <HeaderFull basketHandler={basketHandler}/>
        {isBasketOpen? <Basket /> : null}
      </HeaderContainer>
    </Container>
  );
};