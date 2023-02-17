const {Router} = require('express');
const servicesRouter =require('./routers/servicesRouter')
const usersRouter = require("./routers/usersRouter")
const categoriesRouter = require("./routers/categoriesRouter");
const mixedFiltersRouter = require('./routers/mixedFiltersRouter');

// const {categoriesRouter, usersRouter,servicesRouter} = require("./routers/index")

const router = Router();

router.use('/services', servicesRouter);

router.use('/users', usersRouter);

router.use('/categories', categoriesRouter)

router.use("/filters", mixedFiltersRouter)

module.exports = router;