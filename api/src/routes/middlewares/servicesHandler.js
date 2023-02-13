const {
  getAllServices,
  createService,
} = require("../controllers/servicesController");

const getServicesHandler = async (req, res) => {
  try {
    const servicesResponse = await getAllServices();

    if (servicesResponse.length > 0) {
      res.status(200).json(servicesResponse);
    } else {
      throw Error("Not services found");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postServiceHandler = async (req, res) => {
  try {
    const servicesResults = await createService(req.body);
    res
      .status(201)
      .json({
        message: "Service created succesfully",
        created: servicesResults,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getServicesHandler, postServiceHandler };
