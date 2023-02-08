import { HeroContainer, HeroActions } from "./Hero.styled";
import { useState } from "react";
import { NextProdBtn } from "components/buttons/NexProdtBtn";
import { PrevProdBtn } from "components/buttons/PrevProdBtn";
import { HeroCard } from "./HeroCard/HeroCard";

export const Hero = ({ data }) => {
  const [currentProduct, setCurrentProduct] = useState(0);
  //console.log('data--->', data)
  
  const nextHandler = () => { 
    setCurrentProduct(prevState => {
      if (data.length -1 === currentProduct) {
        return 0;
      } else { return prevState + 1}
    });
  };

  const prevHandler = () => {
    setCurrentProduct(prevState => {
      if (currentProduct === 0) {
        return data.length - 1;
      } else { return prevState - 1}
    });
  };

  return (
    <HeroContainer>
      <HeroCard item={data[currentProduct]} />
     
      <HeroActions>
        <PrevProdBtn prevHandler={prevHandler} width="32" height="32"/>
        <NextProdBtn nextHandler={nextHandler} width="32" height="32" />
      </HeroActions>

    </HeroContainer>
  );
};