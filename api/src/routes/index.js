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
const shopingCart = require("./routers/shopingCart.routes");
const alta = require("./handlers/altaMail");
const pago = require("./handlers/pagoMail");
const data = require("./handlers/updateDataMail");
const baja = require("./handlers/bajaMail");
const active = require("./handlers/activeMail");
const favRouter = require("./routers/favRouter");

const router = Router();

router.use("/services", servicesRouter);

router.use("/users", usersRouter);

router.use("/categories", categoriesRouter);

router.use("/login", loginRouter);

router.use("/user", middleware.decodeToken, userRouter);

router.use("/admin", adminRouter);

router.use("/servicelist", serviceListRouter);

router.use("/shopingCart", shopingCart);

router.post("/checkout", checkOut);

router.use("/alta", alta);

router.use("/pago", pago);

router.use("/baja", baja);

router.use("/dato", data);

router.use("/active", active);

router.use("/fav", favRouter);

module.exports = router;
