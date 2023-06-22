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

      if (!category) throw new Error('Not found');

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

  static async updateCategory(req, res) {
    try {
      const id = req.params.id;
      const newCategory = req.body;

      await Category.findByIdAndUpdate({ _id: id }, newCategory);

      return res.status(200).send({ message: 'Categoria atualizada com sucesso' });
    } catch (err) {
      return res.status(404).send({ message: 'Categoria não encontrada' });
    }
  }

  static async activateCategory(req, res) {
    try {
      const id = req.params.id;

      await Category.findByIdAndUpdate({ _id: id }, { status: 'ATIVA' });

      return res.status(200).send({ message: "Status da categoria atualizado para 'ATIVA' com sucesso" });
    } catch (err) {
      return res.status(404).send({ message: 'Categoria não encontrada' });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const id = req.params.id;

      const deletedCategory = await Category.findByIdAndDelete(id);

      return res.status(200).json(deletedCategory);
    } catch (err) {
      return res.status(404).send({ message: 'Categoria não encontrada' });
    }
  }

  // ativar categoria
}

export default CategoryController;
