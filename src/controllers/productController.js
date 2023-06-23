import Product from '../models/Product.js';

class ProductController {
  static async findProducts(req, res) {
    try {
      const foundProducts = await Product.find();

      if (foundProducts.length === 0) throw new Error('Nenhum produto encontrado');

      return res.status(200).json(foundProducts);
    } catch (err) {
      return res.status(404).send({ message: err.message });
    }
  }

  static async findProductById(req, res) {
    try {
      const id = req.params.id;

      const foundProduct = await Product.findById(id).exec();

      return res.status(200).json(foundProduct);
    } catch (err) {
      return res.status(404).send({ message: 'Produto não encontrado' });
    }
  }
}

export default ProductController;