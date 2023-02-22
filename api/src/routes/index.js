const { Router } = require("express");
const servicesRouter = require("./routers/servicesRouter");
const usersRouter = require("./routers/usersRouter");
const categoriesRouter = require("./routers/categoriesRouter");
const loginRouter = require("./routers/loginRouter");
const userRouter = require("./routers/userRouter")

const router = Router();

router.use("/services", servicesRouter);

router.use("/users", usersRouter);

router.use("/categories", categoriesRouter);

router.use("/login", loginRouter);

router.use("/user", userRouter); //not ready or functional yet

module.exports = router;
