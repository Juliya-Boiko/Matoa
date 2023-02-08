import { Hero } from "components/Hero/Hero";
import { Container, PageContainer } from "components/common/containers.styled";
import { Partners } from "components/Partners/Partners";
import { fetchAllProducts } from "api/axios";
import { useEffect, useState } from "react";
import { Deals } from "components/Deals/Deals";

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
        {/* <Hero data={products[0]} /> */}
        {products && <Hero data={products} />}
        <Deals />
      </Container>
      <Partners />
    </PageContainer>
  );
};