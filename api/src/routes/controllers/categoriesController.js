const { Category, Card } = require("../../db");

const getAllCategories = async () => {
  return await Category.findAll({
    where: {
      active: true,
    },
    attributes: {exclude: ["active"]},
    include:{
      model: Card
    }
  });
};

const createCategory = async ({ name, description = null }) => {
  const newCategory = await Category.create({
    name,
    description,
  });

  return newCategory;
};

const updateCategory = async ({ id, name, description }) => {
  await Category.update(
    { name, description },
    {
      where: {
        id: id,
      },
    }
  );

  const categoryUpdated = await Category.findByPk(id);

  return categoryUpdated;
};

module.exports = { getAllCategories, createCategory, updateCategory };
