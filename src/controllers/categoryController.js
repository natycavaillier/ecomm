import categories from '../models/Category.js';

class CategoryController {
  static findCategories(req, res) {
    categories.find((err, categoriesFound) => {
      if (categoriesFound.length === 0) {
        return res.status(404).send({ message: 'Nenhuma categoria encontrada' });
      }

      return res.status(200).json(categoriesFound);
    });
  }
}

export default CategoryController;
