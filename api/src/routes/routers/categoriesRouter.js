const {Router} = require('express');
<<<<<<< HEAD
const {getCategoriesHandler, postCategoryHandler} = require("../handlers/categoriesHandler")
=======
const {getCategoriesHandler, postCategoryHandler, updateCategoryHandler} = require("../middlewares/categoriesHandler")
>>>>>>> 17a8ada689e186aba653ea4e723f3c2d5a7fb004

const categoriesRouter = Router();

categoriesRouter.get("/", getCategoriesHandler);

categoriesRouter.post("/", postCategoryHandler);

categoriesRouter.put("/", updateCategoryHandler);

module.exports = categoriesRouter;