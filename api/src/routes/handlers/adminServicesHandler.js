const {
  getAllServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/adminServicesController");

const getServicesHandler = async (req, res) => {
  try {
    const servicesList = await getAllServices();
    if (servicesList.length < 1) {
      throw new Error("No Services Found");
    }
    res.status(200).json(servicesList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createServiceHandler = async (req, res) => {
  try {
    const serviceCreated = await createService(req.body);
    res
      .status(201)
      .json({ message: "Service created", created: serviceCreated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateServiceHandler = async (req, res) => {
  try {
    const params = { ...req.body, ...req.params }
    const serviceUpdated = await updateService(params);
    res.status(200).json({
      message: "Service updated succesfully",
      updated: serviceUpdated,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteServiceHandler = async (req, res) => {
  try {
    const active = false
    const params = {...req.params, active}
    const deletedService = await deleteService(params);
    res.status(200).json({ deleted: deletedService });
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

module.exports = {
  getServicesHandler,
  createServiceHandler,
  updateServiceHandler,
  deleteServiceHandler,
};
