const express = require("express");
const cors = require("cors");
const chefRoutes = require("./routes/chefRoutes");
const tableRoutes = require("./routes/tableRoutes");
const menuRoutes = require("./routes/menuRoutes");
const connectDB = require("./models/connectDB");
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());
//DB connection
connectDB();
//Routes
app.use("/api", chefRoutes);
app.use("/api", tableRoutes);
app.use("/api/menuItems",menuRoutes);

// Listener...
const PORT = 3001;
app.listen(PORT,`0.0.0.0`,() => {
  console.log(`Server is Running over ${PORT}`);
});
