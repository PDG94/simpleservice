const {Router} = require('express');
const servicesRouter =require('./servicesRouter')

const router = Router();

router.use('/services', servicesRouter);

// router.use('/users', put imported route function here);

// router.use('/categories', put imported route function here )

module.exports = router;