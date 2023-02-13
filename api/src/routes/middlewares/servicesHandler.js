const { getAllServices } = require("../controllers/servicesController");

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

const postServiceHandler = async (req, res) =>{

}

module.exports = {getServicesHandler, postServiceHandler};