import { findProductsService } from '../../services';

export default function handler(req, res) {
  const products = findProductsService();

  res.status(200).json(products);
}
