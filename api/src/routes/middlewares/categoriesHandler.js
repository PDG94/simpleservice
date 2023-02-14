const {getAllCategories, createCategory} = require("../controllers/categoriesController");

const getCategoriesHandler = async (req, res) => {
  try {
    const categoriesResponse = await getAllCategories();

    if (categoriesResponse.length > 0) {
      res.status(200).json(categoriesResponse);
    } else {
      throw Error("Not categories found");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postCategoryHandler = async (req, res) => {
  try {
    const categoriesResults = await createCategory(req.body);
    res
      .status(201)
      .json({
        message: "Category created succesfully",
        created: categoriesResults,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {getCategoriesHandler, postCategoryHandler};