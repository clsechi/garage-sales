import fs from 'fs';
import path from 'path';
import { products } from '../storage';

const IMAGES_DIRECTORY = 'products';

const getImagePaths = (directoryId) => {
  const dir = path.resolve('./public', IMAGES_DIRECTORY, directoryId);
  const filenames = fs.readdirSync(dir);
  return filenames.map((name) => path.join('/', IMAGES_DIRECTORY, directoryId, name));
};

const findProductsService = () => products.map((product) => {
  const images = getImagePaths(product.identifier);

  return {
    ...product,
    images,
  };
});

export default findProductsService;
