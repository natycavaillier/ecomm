import Category from '../models/Category.js';

class CategoryController {
  static async findCategories(req, res) {
    try {
      const categoriesDocuments = await Category.find();

      if (categoriesDocuments.length === 0) throw new Error('Nenhuma categoria encontrada');

      return res.status(200).json(categoriesDocuments);
    } catch (err) {
      return res.status(404).send({ message: err.message });
    }
  }

  static async findCategoryById(req, res) {
    try {
      const id = req.params.id;

      const category = await Category.findById(id).exec();

      return res.status(200).json(category);
    } catch (err) {
      return res.status(404).send({ message: 'Categoria não encontrada' });
    }
  }

  static async createCategory(req, res) {
    try {
      const categoryToBeCreated = req.body;
      const createdCategory = await Category.create(categoryToBeCreated);

      return res.status(201).json(createdCategory);
    } catch (err) {
      return res.status(400).send({ message: `${err.message} - Falha ao cadastrar categoria` });
    }
  }
}

export default CategoryController;
