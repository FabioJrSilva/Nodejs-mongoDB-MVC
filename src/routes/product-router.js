const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/', controller.get);

router.post('/create', controller.post);

router.put('/update/:id', controller.put);

router.delete('/delete', controller.delete);

module.exports = router;