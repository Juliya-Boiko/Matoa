import { priceCalculator } from "helpers/priceCalculator";
import { useState } from "react";
import DefaultImg from '../../images/products/default.png';
import { ProductCardContent,
  ProductArticle, ProductCardImg, ProductCardTitle, ProductCardPrice, ProductCardOldPrice, ProductCardNewPrice,
  ProductCardAmountBlock, ProductCardActions, ProductCardAmount, ProductDecrBtn, ProductIncrBtn, ProductCardBtn,
  ProductCardDescrItem, ProductCardDescrTitle, ProductCardDescrText
} from "./ProductCard.styled";

export const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(1);
 // console.log(product);

  const incrHandler = () => {
    setAmount(prevState => prevState + 1);
  }
  
  const decrHandler = () => {
    setAmount(prevState => {
      if (prevState === 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
  }

  return (
    <ProductCardContent>
      <ProductArticle>
        <ProductCardImg src={DefaultImg} alt="" />
        <div>
          <ProductCardTitle>{product.name}</ProductCardTitle>
          {!product.discount && <ProductCardPrice>Rp {product.price}</ProductCardPrice>}
          {product.discount !== 0 && <ProductCardOldPrice>Rp {product.price}</ProductCardOldPrice>}
          {product.discount !== 0 && <ProductCardNewPrice>Rp {priceCalculator(product.price, product.discount)}</ProductCardNewPrice>}
          <ProductCardActions>
            <ProductCardAmountBlock>
              <ProductDecrBtn type="button" onClick={decrHandler}>-</ProductDecrBtn>
              <ProductCardAmount>{amount}</ProductCardAmount>
              <ProductIncrBtn type="button" onClick={incrHandler}>+</ProductIncrBtn>
            </ProductCardAmountBlock>
            <ProductCardBtn type="button">Add to basket</ProductCardBtn>
          </ProductCardActions>
        </div>
      </ProductArticle>
      <ul>
        <ProductCardDescrItem>
          <ProductCardDescrTitle>Material</ProductCardDescrTitle>
          <ProductCardDescrText>{product.material}</ProductCardDescrText>
        </ProductCardDescrItem>
        <ProductCardDescrItem>
          <ProductCardDescrTitle>Case</ProductCardDescrTitle>
          <ProductCardDescrText>{product.case}</ProductCardDescrText>
        </ProductCardDescrItem>
        <ProductCardDescrItem>
          <ProductCardDescrTitle>Movement</ProductCardDescrTitle>
          <ProductCardDescrText>{product.movement}</ProductCardDescrText>
        </ProductCardDescrItem>
        <ProductCardDescrItem>
          <ProductCardDescrTitle>Dial</ProductCardDescrTitle>
          <ProductCardDescrText>{product.dial}</ProductCardDescrText>
        </ProductCardDescrItem>
        <ProductCardDescrItem>
          <ProductCardDescrTitle>Hand</ProductCardDescrTitle>
          <ProductCardDescrText>{product.hand}</ProductCardDescrText>
        </ProductCardDescrItem>
        <ProductCardDescrItem>
          <ProductCardDescrTitle>Important to note</ProductCardDescrTitle>
          <ProductCardDescrText>{product.important}</ProductCardDescrText>
        </ProductCardDescrItem>
      </ul>
    </ProductCardContent>
  );
};