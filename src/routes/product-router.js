const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");
const authService = require("../services/auth-service");

router.get("/show", controller.get);
router.get("/show/id/:id", controller.getById);
router.get("/show/slug/:slug", controller.getBySlug);
router.get("/show/tag/:tag", controller.getByTag);
router.post("/create", authService.decodeToken, controller.post);
router.put("/update/:id", controller.put);
router.delete("/delete/:id", controller.delete);

module.exports = router;
