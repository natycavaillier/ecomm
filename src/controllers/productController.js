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

  static async createProduct(req, res) {
    try {
      const productToBeCreated = req.body;

      const createdProduct = await Product.create(productToBeCreated);

      return res.status(201).json(createdProduct);
    } catch (err) {
      return res.status(400).send({ message: `${err.message} - Falha ao cadastrar produto` });
    }
  }

  static async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const newProductData = req.body;

      await Product.findByIdAndUpdate({ _id: id }, newProductData);

      return res.status(200).send({ message: 'Produto atualizado com sucesso' });
    } catch (err) {
      return res.status(404).send({ message: 'Produto não encontrado' });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = req.params.id;

      const deletedProduct = await Product.findByIdAndDelete(id);

      return res.status(200).json(deletedProduct);
    } catch (err) {
      return res.status(404).send({ message: 'Produto não encontrado' });
    }
  }
}

export default ProductController;
