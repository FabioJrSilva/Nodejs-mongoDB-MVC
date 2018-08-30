const express = require("express");
const router = express.Router();
const controller = require("../controllers/customer-controller");
const authService = require("../services/auth-service");

router.get("/show", controller.get);
router.post("/create", authService.authorize, controller.post);

module.exports = router;
