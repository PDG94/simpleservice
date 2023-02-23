const {getAllServiceLists, createServiceList, updateServiceList} = require("../controllers/serviceListController");

const getServiceListsHandler = async (req, res) => {
  try {
    const serviceListsResponse = await getAllServiceLists();

    if (serviceListsResponse.length > 0) {
      res.status(200).json(serviceListsResponse);
    } else {
      throw new Error("Not service list found");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postServiceListHandler = async (req, res) => {
  try {
    const serviceListsResults = await createServiceList(req.body);
    res
      .status(201)
      .json({
        message: "Service List created succesfully",
        created: serviceListsResults,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateServiceListHandler = async (req, res) => {
  try {
    // const serviceListUpdated = await updateServiceList(req.body);
    // res
    //   .status(200)
    //   .json({
    //     message: "Service List updated succesfully",
    //     updated: serviceListUpdated,
    //   });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {getServiceListsHandler, postServiceListHandler, updateServiceListHandler};