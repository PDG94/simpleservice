const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/adminCategoriesController");

const getAllCategoriesHandler = async (req, res) => {
  try {
    const categoriesList = await getAllCategories();
    if (categoriesList.length < 1) {
      throw new Error("No categories found");
    }
    res.status(200).json(categoriesList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCategoryHandler = async (req, res) => {
  try {
    const categoryCreated = await createCategory(req.body);
    res.status(201).json({
      message: "Category created succesfully",
      created: categoryCreated,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCategoryHandler = async (req, res) => {
  try {
    const categoryUpdated = await updateCategory({...req.body, ...req.params});
    res.status(200).json({message: "Category updated succesfully", updated: categoryUpdated})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const deleteCategoryHandler = async (req, res) => {
  try {
    const active = false;
    const params = {...req.params, active}
    const categoryDeleted = await deleteCategory(params);
    res.status(200).json({deleted: categoryDeleted});
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { getAllCategoriesHandler, createCategoryHandler, updateCategoryHandler, deleteCategoryHandler };
