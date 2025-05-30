const Chef = require("../models/Chef");

exports.getAllChefs = async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
  } catch (err) {
    res.status(500).json({ message: ` err.message ` });
  }
};
exports.addChef = async (req, res) => {
  const { name,orderTaken } = req.body;
  const chef = new Chef({
    name: name,
    orderTaken:orderTaken,
  });
  try {
    const newChef = await chef.save();
    res.status(200).json(newChef);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
