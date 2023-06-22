import categories from '../models/Category.js';

class CategoryController {
  static async findCategories(req, res) {
    try {
      const categoriesDocuments = await categories.find();
      if (categoriesDocuments.length === 0) throw new Error('Nenhuma categoria encontrada');

      return res.status(200).json(categoriesDocuments);
    } catch (err) {
      return res.status(404).send({ message: err.message });
    }

    // categories.find((err, categoriesFound) => {
    //   if (categoriesFound.length === 0) {
    //     return res.status(404).send({ message: 'Nenhuma categoria encontrada' });
    //   }

    //   return res.status(200).json(categoriesFound);
    // });
  }

  static async findCategoryById(req, res) {
    try {
      const id = req.params.id;

      const category = await categories.findById(id).exec();

      return res.status(200).json(category);
    } catch (err) {
      return res.status(404).send({ message: 'Categoria não encontrada' });
    }
  }

  static async createCategory(req, res) {
    try {
      const categoryToBeCreated = req.body;
      const createdCategory = await categories.create(categoryToBeCreated);

      return res.status(201).json(createdCategory);
    } catch (err) {
      return res.status(400).send({ message: `${err.message} - Falha ao cadastrar categoria` });
    }

    // const category = new categories(req.body);

    // category.save(() => {
    //   res.status(201).send(category.toJSON());
    // });
  }
}

export default CategoryController;
