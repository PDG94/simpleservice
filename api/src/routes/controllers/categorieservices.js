const { Category, ServiceList } = require("../../db");

const getServicesList = async ({id}) => {
  return await Category.findAll({
    where: {
      id: id,
      active: true,
    },
    attributes: { exclude: ["active"] },
    include: {
      model: ServiceList,
    },
  });
};

module.exports = { getServicesList };
