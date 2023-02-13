import DefaultImg from '../../../images/products/default.png';
import { HeroCardContainer, HeroCardImg, HeroCardTitle, HeroCardText, HeroCardLink } from './HeroCard.styled';
import { AddBtn } from 'components/buttons/AddBtn';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { addItem } from 'redux/orderSlice';
import { useDispatch } from "react-redux";

export const HeroCard = ({ item }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const basket = useSelector(state => state.order.items);
  //console.log('item-->', item);
  //console.log('basket-->', basket);

  const addHandler = () => {
    const cheking = basket.find(order => order.id === item._id);
    if (cheking) {
      console.log('Already in basket');
    } else {
      const newItem = {
        id: item._id,
        amount: 1,
      }
      dispatch(addItem(newItem));
    }
  };

  return (
    <>
      {item
        ? <HeroCardContainer>
            <HeroCardImg src={DefaultImg} alt="Product img" />
            <div>
              <HeroCardTitle>{item.name}</HeroCardTitle>
              <HeroCardText>{item.important}</HeroCardText>
              <HeroCardLink to={`products/:${item._id}`} state={{ from: location }}>Discover</HeroCardLink>
            <AddBtn width={32} height={32} action={addHandler} />
            </div>
          </HeroCardContainer>
        : null}
    </>
  );
};