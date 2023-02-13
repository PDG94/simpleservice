const {Router} = require('express');
//const {getServices.js}

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);