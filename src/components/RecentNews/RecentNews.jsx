import { SectionTitle } from "components/common/titles.styled";
import { dateFormatter } from "helpers/dateFormatter";
import NewsDefaultImg from '../../images/news/news-defailt.png';
import { NewsContainer, NewsCard, NewsCardDate, NewsCardTitle, NewsCardLink, NewsCardImage } from "./RecentNews.styled";

export const RecentNews = ({ data }) => {
 // console.log(data);

  return (
    <NewsContainer>
      <SectionTitle>Recent News</SectionTitle>
      <NewsCard>
        <div>
          <NewsCardDate>{dateFormatter(data.createdAt)}</NewsCardDate>
          <NewsCardTitle>{data.title}</NewsCardTitle>
          <NewsCardLink to="news">Discover</NewsCardLink>
        </div>
        <NewsCardImage src={NewsDefaultImg} alt="" />
      </NewsCard>
    </NewsContainer>
  );
};