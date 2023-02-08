import DealDefaultImg from '../../../images/products/default-deals.png';
import { priceCalculator } from 'helpers/priceCalculator';
import { DealArticle, DealImage, DealName, DealDiscount, DealOldPrice, DealNewPrice, DealBtn } from './DealCard.styled';

export const DealCard = ({ item }) => {
  return (
    <DealArticle>
      <DealImage src={DealDefaultImg} alt="Deal Img" />
      <DealName>{item.name}</DealName>
      <DealDiscount>{item.discount}% Off</DealDiscount>
      <DealOldPrice>Rp {item.price}</DealOldPrice>
      <DealNewPrice>Rp {priceCalculator(item.price, item.discount)}</DealNewPrice>
      <DealBtn>Add to basket</DealBtn>
    </DealArticle>
  );
};