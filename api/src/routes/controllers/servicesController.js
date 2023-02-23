const { User, Card, Category } = require("../../db");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getAllServices = async () => {
  return await Card.findAll({
    where: {
      active: true,
    },
    attributes: ["id", "servicename", "price", "CategoryId"],
    include: {
      model: User,
      attributes: ["id","name","rating"],
    },
    raw: true,
  });
};

const createService = async ({
  CategoryId,
  description,
  servicename,
  price,
  user_id

}) => {
  const newService = await Card.create({
    description,
    servicename,
    price,

  });
  console.log(CategoryId);

  const categories = await Category.findByPk(CategoryId);
  const user = await User.findByPk(user_id);

  console.log(categories);
  // console.log(user);

  await categories.addCard(newService);
  await user.addCard(newService);

  return newService;
};

//updateService updates just one instance

const updateService = async ({
  id,
  description,
  servicename,
  price,
}) => {

  await Card.update(
    { description, servicename, price },
    {
      where: {
        id: id,
      },
    }
  );

  const serviceUpdated = await Card.findByPk(id);

  return serviceUpdated;
};

const getServiceById = async ({ id }) => {

  const serviceById = await Card.findAll({
    where: {
      id: id,
    },
    include: [
      {
        model: User,
      },
      { model: Category },
    ],
  });

  return serviceById;
};

const orderService = async (attributes, direction) => {
  const order = await Card.findAll({ order: [[attributes, direction]] });
  return order;
};
const getServiceByDescription = async (valdescription) => {
  const serviceByDesc = await Card.findAll({
    where: {
      description: {
        [Op.substring]: valdescription,
      },
    },
    attributes: ["id", "servicename", "description", "price"],
  });

  return serviceByDesc;
};

const getServiceByCategory = async (idCategory) => {
  const serviceByCategory = await Card.findAll({
    where: {
      CategoryId: idCategory,
    },
  });

  return serviceByCategory;
};

const filterServices = async (order, direction, categoryId) => {
  return await Card.findAll({
    where: {
      active: true,
      CategoryId: categoryId,
    },
    order: [[order, direction]],
  });
};

module.exports = {
  getAllServices,
  createService,
  updateService,
  getServiceById,
  orderService,
  getServiceByDescription,
  getServiceByCategory,
  filterServices,
};
