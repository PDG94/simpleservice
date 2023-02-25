const { getServicesList } = require("../controllers/categorieservices");

const getServicesListH = async (req, res) => {
  try {
    const serviceListsResponse = await getServicesList(req.params);

    if (serviceListsResponse.length > 0) {
      res.status(200).json(serviceListsResponse);
    } else {
      throw new Error("Not service list found");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getServicesListH };
