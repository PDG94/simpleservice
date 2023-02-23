const { Category } = require("../../db");

const getAllCategories = async () => {
  return await Category.findAll();
};

const createCategory = async ({ name, description }) => {
  return await Category.create({ name, description });
};

const updateCategory = async ({ id, name, description, active }) => {
  await Category.update(
    { name, description, active },
    {
      where: {
        id: id,
      },
    }
  );
  const updatedCategory = await Category.findByPk(id);
  return updatedCategory;
};

const deleteCategory = async ({ id, active }) => {
  return await Category.update(
    { active },
    {
      where: {
        id: id,
        active: true,
      },
    }
  );
};

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };
