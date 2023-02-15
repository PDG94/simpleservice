const { Service, User } = require("../../db");

const getAllServices = async () => {
  return await Service.findAll({
    where: {
      active: true,
    },
    // include: {
    //   model: User,
    //   attributes: ['id', 'name']
    // }
  });
};

const createService = async ({ name, image, description, price }) => {
  const newService = await Service.create({
    name,
    image,
    description,
    price,
  });

  return newService;
};

//updateService updates just one instance
const updateService = async ({ id, name, image, description, price }) => {
  await Service.update(
    { name, image, description, price },
    {
      where: {
        id: id,
      },
    }
  );

  const serviceUpdated = await Service.findByPk(id);

  return serviceUpdated;
};

const getServiceById = async ({ id }) => {
  const serviceById = await Service.findAll({
    where: {
      id: id,
    },
    // include: {
    //   model: User,
    // },
  });

  return serviceById;
};

module.exports = { getAllServices, createService, updateService, getServiceById };
