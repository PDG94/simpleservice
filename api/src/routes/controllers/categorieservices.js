const { Category, ServiceList } = require("../../db");

const getServicesList = async () => {
  return await Category.findAll({
    where: {
      active: true,
    },
    attributes: { exclude: ["active"] },
    include: {
      model: ServiceList,
    },
  });
};

module.exports = { getServicesList };
