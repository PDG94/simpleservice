const { Router } = require("express");
const middleware = require("../middleware");
const servicesRouter = require("./routers/servicesRouter");
const usersRouter = require("./routers/usersRouter");
const categoriesRouter = require("./routers/categoriesRouter");
const loginRouter = require("./routers/loginRouter");
const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const serviceListRouter = require("./routers/serviceListRouter");
const checkOut = require("./controllers/checkOut.js");

const router = Router();

router.use("/services", servicesRouter);

router.use("/users", usersRouter);

router.use("/categories", categoriesRouter);

router.use("/login", loginRouter);

router.use("/user", middleware.decodeToken, userRouter); //not ready or functional yet

router.use("/admin", adminRouter);

router.use("/servicelist", serviceListRouter);

router.use("/shopingCart", shopingCart);

router.post("/checkout", checkOut);

module.exports = router;
