import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import Product from './Product';

export default function ProductList({ products = [] }) {
  return (
    <Box margin="auto" width="90%">
      {
        products.map((product) => (
          <Product
            key={product.identifier}
            product={product}
          />
        ))
      }
    </Box>
  );
}

ProductList.propTypes = {
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
