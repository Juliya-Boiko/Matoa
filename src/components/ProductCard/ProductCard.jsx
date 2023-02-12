import { priceCalculator } from "helpers/priceCalculator";
import { useState } from "react";
import DefaultImg from '../../images/products/default.png';

export const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(1);
  console.log(product);

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
    <div>
      <img src={DefaultImg} alt="" width="50px" />
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{priceCalculator(product.price, product.discount)}</p>
        <div>
          <div>
            <button type="button" onClick={decrHandler}>Decr</button>
            <span>{amount}</span>
            <button type="button" onClick={incrHandler}>Incr</button>
          </div>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};