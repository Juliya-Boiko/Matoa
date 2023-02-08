import { Hero } from "components/Hero/Hero";
import { Container, PageContainer } from "components/common/containers.styled";
import { Partners } from "components/Partners/Partners";
import { fetchAllProducts } from "api/axios";
import { useEffect, useState } from "react";
import { Deals } from "components/Deals/Deals";
import { discountFilter } from "helpers/discountFilter";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const getProductsAsync = async () => {
    const data = await fetchAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    getProductsAsync();
  }, []);

  return (
    <PageContainer>
      <Container>
        {products ? <Hero data={products} /> : null}
        {products ? <Deals data={discountFilter(products)} /> : null}
      </Container>
      <Partners />
    </PageContainer>
  );
};