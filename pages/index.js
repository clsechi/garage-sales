import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container, Input, Heading } from '@chakra-ui/react';
import ProductList from '../components/ProductList';
import { findProductsService } from '../services';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Bazar do Sechi</title>
        <meta name="description" content="Bazar do Sechi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        centerContent
        maxW="5xl"
        padding="2rem 0"
      >
        <Heading fontSize="3xl">Bazar do Sechi</Heading>
        <Input
          margin="10px"
          maxW={{ base: '90%', md: '60%' }}
          placeholder="Procurar"
          bg="white"
        />
        <ProductList
          products={products}
        />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const products = findProductsService();

  return {
    props: {
      products,
    },
  };
}

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      identifier: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};
