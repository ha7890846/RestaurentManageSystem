const { default: mongoose } = require("mongoose");

const chefSchema = new mongoose.Schema({
  name: { type: String },
  orderTaken:{type:Number}
});
module.exports = mongoose.model("Chef", chefSchema);