import { SectionTitle } from "components/common/titles.styled";
import { useState } from "react";
import { ReviewCard } from "./ReviewCard/ReviewCard";

export const Reviews = ({ data }) => {
  const [currentReview, setCurrentReview] = useState(0);
  //console.log(data);

  return (
    <div>
      <SectionTitle>Reviews</SectionTitle>
      <div>
        <ReviewCard data={data[currentReview]} />
        <div>
          <button type="button">Prev</button>
          <button type="button">Next</button>
        </div>
      </div>
    </div>
  );
};