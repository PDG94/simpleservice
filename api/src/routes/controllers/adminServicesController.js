const { Card, Category } = require("../../db");

const getAllServices = async () => {
  return await Card.findAll();
};
//esto crea un instancia de servicio no asociada a usuario
const createService = async ({
  CategoryId,
  description,
  servicename,
  price,
}) => {
  const newService = await Card.create({ description, servicename, price });

  const categoryInstance = await Category.findByPk(CategoryId);
  await categoryInstance.addCard(newService);

  return newService;
};

const updateService = async ({
  id,
  description,
  servicename,
  price,
  active,
}) => {
  await Card.update(
    { description, servicename, price, active },
    {
      where: {
        id: id,
      },
    }
  );

  const serviceUpdated = await Card.findByPk(id);

  return serviceUpdated;
};

const deleteService = async ({ id }) => {
  return await Card.update({ active }, { where: { id: id, active: true } });
};

module.exports = { getAllServices, createService, updateService, deleteService };
