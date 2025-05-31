const express = require("express");
const { getAllTables, addTable,deleteTable } = require("../controller/tableController");
const router = express.Router();

router.get("/table",getAllTables);
router.post("/table",addTable);
router.delete("/table/:id",deleteTable);
module.exports = router;