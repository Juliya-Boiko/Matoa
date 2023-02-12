import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchAllProducts } from '../api/axios';
import { Loader } from 'components/Loader/Loader';
import { Container, PageContainer } from 'components/common/containers.styled';
import { ProductCard } from 'components/ProductCard/ProductCard';

export const Details = () => {
  const { id } = useParams();
  const productId = id.slice(1, id.length);
  const [product, setProduct] = useState(null);

  const getProductById = async (prodId) => { 
   const data = await fetchAllProducts();
    const filtered = data.find(item => item._id === prodId);
   // console.log(filtered);
    setProduct(filtered);
  };

  useEffect(() => {
    getProductById(productId);
  }, [productId]);

  return (
    <PageContainer>
      <Container>
        {product
          ? <ProductCard product={product} />
          : <Loader />
        }
      </Container>
    </PageContainer>
  );
};