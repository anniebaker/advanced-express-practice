const express = require("express");
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/products")

router.get("/products", list);
router.get("/products/:id", show)
router.post("/products", create)

module.exports = router;