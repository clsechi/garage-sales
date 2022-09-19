import PropTypes from 'prop-types';
import { Flex, Box, Text } from '@chakra-ui/react';
import ImageViewer from './ImageViewer';

const Description = ({ description }) => (
  [
    description.map((item) => <Text key={item}>{item}</Text>),
  ]
);

export default function Product({ product }) {
  return (
    <Flex
      alignItems="start"
      justifyContent="start"
      border="1px"
      borderColor="gray.200"
      padding="10px"
      margin="10px"
      bg="white"
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex maxW={{ base: '100%', md: '60%' }}>
        <ImageViewer
          images={product.images}
        />
      </Flex>
      <Flex
        maxW={{ base: '100%', md: '40%' }}
        marginTop={{ base: '15px', md: '0px' }}
        marginLeft={{ base: '10px' }}
        direction={{ base: 'column' }}
      >
        <Flex
          direction="row"
          justify="start"
          align="baseline"
        >
          <Text fontSize="3xl">
            R$
            {' '}
            {product.price}
          </Text>
          <Text marginLeft="5px" fontSize="sm">á vista</Text>
        </Flex>
        <Text fontSize="xl">
          {product.title}
        </Text>
        <Box marginY="10px">
          <Description
            description={product.description}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

Product.propTypes = {
  product: PropTypes.exact({
    identifier: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
