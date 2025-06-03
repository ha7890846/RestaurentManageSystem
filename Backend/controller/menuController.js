const MenuItem = require('../models/MenuItem');

exports.getBurger=async (req, res) => {
  try {
    const items = await MenuItem.find({ 
      category: req.params.category 
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
