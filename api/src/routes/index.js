const {Router} = require('express');
const servicesRouter =require('./servicesRouter')
const usersRouter = require("./usersRouter")
const categoriesRouter = require("./categoriesRouter")

const router = Router();

router.use('/services', servicesRouter);

router.use('/users', usersRouter);

router.use('/categories', categoriesRouter)

module.exports = router;