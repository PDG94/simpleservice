const { Card } = require("../../db");

const filterServices = async (order, direction, categoryId) => {
  return await Card.findAll({
    where: {
      active: true,
      CategoryId: categoryId,
    },
    order: [[order, direction]],
  });
};

module.exports = { filterServices };
