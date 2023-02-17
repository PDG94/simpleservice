const {Router} = require("express");

const {mixedFilterHandler} = require("../handlers/mixedFiltersHandler")

const mixedFiltersRouter = Router()

mixedFiltersRouter.get("/", mixedFilterHandler);

module.exports = mixedFiltersRouter;