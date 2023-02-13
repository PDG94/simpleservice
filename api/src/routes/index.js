const {Router} = require('express');
const servicesRouter =require('./servicesRouter')
const usersRouter = require("./usersRouter")

const router = Router();

router.use('/services', servicesRouter);

router.use('/users', usersRouter);

// router.use('/categories', put imported route function here )

module.exports = router;