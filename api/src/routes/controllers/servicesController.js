const { Service } = require("../../db");

const getAllServices = async () => {
  return await Service.findAll();
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

module.exports = { getAllServices, createService, updateService };
