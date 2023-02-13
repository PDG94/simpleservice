const {getAllCategories} = require("../controllers/categoriesController");

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

module.exports = {getCategoriesHandler};