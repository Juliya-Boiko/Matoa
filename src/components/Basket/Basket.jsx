import { Backdrop } from "components/common/backdrop.styled";
import { BasketContainer } from "./Basket.styled";
import { useEffect } from "react";
import { Loader } from "components/Loader/Loader";
//import { fetchAllProducts } from "api/axios";
//import { useSelector } from "react-redux";

export const Basket = ({ closeBasket }) => {
  // const basket = useSelector(state => state.order.items);
  // const [items, setItems] = useState([]);
  //console.log('basket--->', basket);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeBasket();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeBasket]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeBasket();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <BasketContainer>
        <Loader />
        {/* <ul>
          <li>order</li>
          <li>order</li>
          <li>order</li>
        </ul>
        <button>ORDER</button> */}
      </BasketContainer>
    </Backdrop>
  );
}