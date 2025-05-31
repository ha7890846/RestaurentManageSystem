const express = require("express");
const router = express.Router();
const { getAllChefs, addChef } = require("../controller/chefController");


router.get("/chefs", getAllChefs);
router.post("/chefs", addChef);
module.exports = router;
