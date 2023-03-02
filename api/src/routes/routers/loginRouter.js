const {Router} = require('express');
const middleware = require('../../middleware');

const{loginHandler} = require('../handlers/loginHandler') 

const loginRouter = Router();

loginRouter.get("/",middleware.decodeToken, loginHandler);

module.exports = loginRouter;