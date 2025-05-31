const { default: mongoose } = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableName: { type: String },
  tableNum: { type: Number },
  chairPerson: { type: Number }
});

module.exports = mongoose.model("Table", tableSchema);