import DefaultReviewImg from '../../../images/reviews/reviews-default.png';
import { dateFormatter } from 'helpers/dateFormatter';
import { ReviewArticle, ReviewCardText, ReviewCardName, ReviewCardDate } from './ReviewCard.styled';

export const ReviewCard = ({ data }) => {
  // console.log(data);

  return (
    <ReviewArticle>
      <img src={DefaultReviewImg} alt="Reviewer" width="50px" />
      <div>
        <ReviewCardText>{data.review}</ReviewCardText>
        <ReviewCardName>{data.author}</ReviewCardName>
        <ReviewCardDate>{dateFormatter(data.createdAt)}</ReviewCardDate>
      </div>
    </ReviewArticle>
  );
};