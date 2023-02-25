const { Router } = require("express");
const router = Router();
const { getShopingCart } = require("../controllers/getShopingCart");
const {
  getShopingCartTotalAmount,
} = require("../controllers/getShopingCartTotalAmount");
const {
  postAddToShopingCart,
} = require("../controllers/postAddToShopingCart.js");
const {
  deleteItemShopingCart,
} = require("../controllers/deleteItemShopingCart");

router.get("/", getShopingCart);
router.get("/totalAmount", getShopingCartTotalAmount);
router.post("/", postAddToShopingCart);
router.delete("/", deleteItemShopingCart);

module.exports = router;