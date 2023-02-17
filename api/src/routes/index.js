const {Router} = require('express');
const servicesRouter =require('./routers/servicesRouter')
const usersRouter = require("./routers/usersRouter")
const categoriesRouter = require("./routers/categoriesRouter");

const router = Router();

router.use('/services', servicesRouter);

router.use('/users', usersRouter);

router.use('/categories', categoriesRouter)

module.exports = router;