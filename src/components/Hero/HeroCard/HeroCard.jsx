import DefaultImg from '../../../images/products/default.png';
import { HeroCardContainer, HeroCardImg, HeroCardTitle, HeroCardText, HeroCardLink } from './HeroCard.styled';
import { AddBtn } from 'components/buttons/AddBtn';
import { useLocation } from 'react-router-dom';

export const HeroCard = ({ item }) => {
  const location = useLocation();
  //console.log('item-->', item);

  return (
    <>
      {item
        ? <HeroCardContainer>
            <HeroCardImg src={DefaultImg} alt="Product img" />
            <div>
              <HeroCardTitle>{item.name}</HeroCardTitle>
              <HeroCardText>{item.important}</HeroCardText>
              <HeroCardLink to={`products/:${item._id}`} state={{ from: location }}>Discover</HeroCardLink>
              <AddBtn width={32} height={32}/>
            </div>
          </HeroCardContainer>
        : null}
    </>
  );
};