import { useEffect, useState } from "react";
import { fetchAllProducts, fetchAllNews, fetchAllReviews } from "api/axios";
import { discountFilter } from "helpers/discountFilter";
import { Hero } from "components/Hero/Hero";
import { Deals } from "components/Deals/Deals";
import { RecentNews } from "components/RecentNews/RecentNews";
import { Reviews } from "components/Reviews/Reviews";
import { Partners } from "components/Partners/Partners";
import { Container, PageContainer } from "components/common/containers.styled";
import { Loader } from "components/Loader/Loader";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [recentNews, setRecentNews] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getProductsAsync = async () => {
    const data = await fetchAllProducts();
    setProducts(data);
  };

  const getNewsAsync = async () => { 
    const data = await fetchAllNews();
    setRecentNews(data[0]);
  };

  const getReviewsAsync = async () => {
    const data = await fetchAllReviews();
    setReviews(data);
  };


  useEffect(() => {
    getProductsAsync();
    getNewsAsync();
    getReviewsAsync();
  }, []);

  return (
    <PageContainer>
      <Container>
        {products ? <Hero data={products} /> : <Loader />}
        {products ? <Deals data={discountFilter(products)} /> : <Loader />}
        {recentNews ? <RecentNews data={recentNews} /> : <Loader />}
        {reviews ? <Reviews data={reviews} /> : <Loader />}
      </Container>
      <Partners />
    </PageContainer>
  );
};