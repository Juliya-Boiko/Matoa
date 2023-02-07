import { Hero } from "components/Hero/Hero";
import { Container, PageContainer } from "components/common/containers.styled";
import { Partners } from "components/Partners/Partners";
export const Home = () => {
  return (
    <PageContainer>
      <Container>
        <Hero />
      </Container>
      <Partners />
    </PageContainer>
  );
};