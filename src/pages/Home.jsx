import { Hero } from "components/Hero/Hero";
import { Container, PageContainer } from "components/common/containers.styled";
import { Partners } from "components/Partners/Partners";
import { fetchAllProducts, fetchAllNews } from "api/axios";
import { useEffect, useState } from "react";
import { Deals } from "components/Deals/Deals";
import { discountFilter } from "helpers/discountFilter";
import { RecentNews } from "components/RecentNews/RecentNews";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [recentNews, setRecentNews] = useState(null);

  const getProductsAsync = async () => {
    const data = await fetchAllProducts();
    setProducts(data);
  };

  const getNewsAsync = async () => { 
    const data = await fetchAllNews();
    setRecentNews(data[0]);
  };

  useEffect(() => {
    getProductsAsync();
    getNewsAsync();
  }, []);

  return (
    <PageContainer>
      <Container>
        {products ? <Hero data={products} /> : null}
        {products ? <Deals data={discountFilter(products)} /> : null}
        {recentNews ? <RecentNews data={recentNews} /> : null}
      </Container>
      <Partners />
    </PageContainer>
  );
};