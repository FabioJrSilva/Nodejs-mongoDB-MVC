const express = require("express");
const router = express.Router();
const controller = require("../controllers/order-controller");

router.get("/show", controller.get);
router.post("/create", controller.post);

module.exports = router;
