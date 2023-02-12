import DefaultReviewImg from '../../../images/reviews/reviews-default.png';
import { dateFormatter } from 'helpers/dateFormatter';
import { ReviewArticle, ReviewCardPhoto, ReviewCardText, ReviewCardName, ReviewCardDate } from './ReviewCard.styled';

export const ReviewCard = ({ data }) => {

  return (
    <ReviewArticle>
      <ReviewCardPhoto src={DefaultReviewImg} alt="Reviewer"/>
      { data && <div>
        <ReviewCardText>{data.review}</ReviewCardText>
        <ReviewCardName>{data.author}</ReviewCardName>
        <ReviewCardDate>{dateFormatter(data.createdAt)}</ReviewCardDate>
      </div> }
    </ReviewArticle>
  );
};