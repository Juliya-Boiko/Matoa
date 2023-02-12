import { SectionTitle } from "components/common/titles.styled";
import { useState } from "react";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { ReviewsActions } from "./Reviews.styled";
import { PrevRevBtn } from "components/buttons/PrevRevBtn";
import { NextRevBtn } from "components/buttons/NextRevBtn";

export const Reviews = ({ data }) => {
  const [currentReview, setCurrentReview] = useState(0);
  //console.log(data);

  const nextHandler = () => { 
    setCurrentReview(prevState => prevState + 1);
  //   setCurrentProduct(prevState => {
  //     if (data.length -1 === currentProduct) {
  //       return 0;
  //     } else { return prevState + 1}
  //   });
  };

  const prevHandler = () => {
    setCurrentReview(prevState => prevState - 1);
    // setCurrentProduct(prevState => {
    //   if (currentProduct === 0) {
    //     return data.length - 1;
    //   } else { return prevState - 1}
    // });
  };

  return (
    <div>
      <SectionTitle>Reviews</SectionTitle>
      <div>
        <ReviewCard data={data[currentReview]} />
        <ReviewsActions>
          <PrevRevBtn prevHandler={prevHandler} size="22px" />
          <NextRevBtn nextHandler={nextHandler} size="30px" />
        </ReviewsActions>
      </div>
    </div>
  );
};