import { Backdrop } from "components/common/backdrop.styled";
import { BasketContainer } from "./Basket.styled";
import { useEffect } from "react";

export const Basket = ({ closeBasket }) => {
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
        <ul>
          <li>order</li>
          <li>order</li>
          <li>order</li>
        </ul>
        <button>ORDER</button>
      </BasketContainer>
    </Backdrop>
  );
}