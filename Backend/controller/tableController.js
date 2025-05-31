const Table = require("../models/Table");
const mongoose = require("mongoose");
exports.getAllTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addTable = async (req, res) => {
  const { tableName, tableNum, chairPerson } = req.body;
  const table = new Table({
    tableName: tableName,
    tableNum: tableNum,
    chairPerson: chairPerson,
  });
  try {
    const newTable = await table.save();
    res.status(200).json(newTable);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deleteTable = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const deletedTable = await Table.findByIdAndDelete(id);
    if (!deletedTable) {
      return res.status(404).json({ error: "Table not found" });
    }
    res.json({
      message: "Table deleted successfully",
    });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({
      error: "Server error",
    });
  }
};
