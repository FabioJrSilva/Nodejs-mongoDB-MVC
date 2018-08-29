const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");

router.get("/show", controller.get);
router.get("/show/id/:id", controller.getById);
router.get("/show/slug/:slug", controller.getBySlug);
router.get("/show/tag/:tag", controller.getByTag);
router.post("/create", controller.post);
router.put("/update/:id", controller.put);
router.delete("/delete/:id", controller.delete);

module.exports = router;
