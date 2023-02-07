import { Hero } from "components/Hero/Hero";
import { Container, PageContainer } from "components/common/containers.styled";

export const Home = () => {
  return (
    <PageContainer>
      <Container>
        <Hero />
      </Container>
    </PageContainer>
  );
};