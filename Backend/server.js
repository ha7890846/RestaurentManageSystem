const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const chefRoutes = require("./routes/chefRoutes");
const app = express();
app.use(cors());
app.use(express.json());
//DB connection
mongoose
  .connect("mongodb://localhost:27017/restaurent")
  .then(console.log("MongoDB is Connected!"))
  .catch((err) => {
    console.error(`Error to connect DB: ${err}`);
  });

//Routes
app.use("/api", chefRoutes);


// Listener...
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is Running over ${PORT}`);
});
