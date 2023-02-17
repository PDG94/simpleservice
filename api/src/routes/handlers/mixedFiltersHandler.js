const { filterServices } = require("../controllers/mixedFiltersController");

const mixedFilterHandler = async (req, res) => {
  try {
    const { order, direction, categoryId } = req.query;

    if (order && direction && categoryId) {
      const filteredServices = await filterServices(
        order,
        direction,
        categoryId
      );
      res.status(200).send(filteredServices);
      return;
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  mixedFilterHandler,
};
