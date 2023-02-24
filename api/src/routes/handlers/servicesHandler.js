const {
  getAllServices,
  createService,
  updateService,
  getServiceById,
  orderService,
  getServiceByDescription,
  getServiceByCategory,
  filterServices
} = require("../controllers/servicesController");

const getServicesHandler = async (req, res) => {
  try {
    const servicesResponse = await getAllServices();

    const {order,servicename, direction, description,categoryId } = req.query;
    
    if(order && direction && categoryId){
      const filteredServices = await filterServices(
        order,
        direction,
        categoryId
      );
      res.status(200).send(filteredServices);
      return;
    }

    if(order && direction){
      const orderServ = await orderService(order,direction)
      res.status(200).send(orderServ)
      return
    }

    if(servicename){
      let serviceNameFiltered = await servicesResponse.filter((service)=> 
      // service.name.toLowerCase().includes(name.toLowerCase()))
      service.servicename.toLowerCase().includes(servicename.toLowerCase()))
      if(servicename.length > 0){
        res.status(200).send(serviceNameFiltered)
        return
      } else{
        throw new Error("Service not found")
      }
    }
    if(description){
    let  servicesDescription = await getServiceByDescription(description);
      if(servicesDescription.length){
        res.status(200).json(servicesDescription);  
        return
      }else{
        throw new Error("Not services found");  
      }
    }   

    if(categoryId){
      let  servicesByCategory = await getServiceByCategory(categoryId);
        if(servicesByCategory.length){
          res.status(200).json(servicesByCategory);  
          return
        }else{
          throw new Error("Not services found");  
        }
      }    
        

    if (servicesResponse.length > 0) {
      res.status(200).json(servicesResponse); 
      
    } else {
      throw new Error("Not services found");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

};

const getServicesByIdHandler = async (req, res) => {
  try {
    const results = await getServiceById(req.params);
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


const postServiceHandler = async (req, res) => {
  try {
    const {user_id} = req.user;
    const params = {...req.body, user_id}
    const servicesResults = await createService(params);
    // const servicesResults = await createService(req.body);
    res.status(201).json({
      message: "Service created succesfully",
      created: servicesResults,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateServiceHandler = async (req, res) => {
  try {
    const serviceUpdated = await updateService(req.body);
    res.status(200).json({
      message: "Service updated succesfully",
      updated: serviceUpdated,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getServicesHandler,
  postServiceHandler,
  updateServiceHandler,
  getServicesByIdHandler,
};
