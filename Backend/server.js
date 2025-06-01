const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const chefRoutes = require("./routes/chefRoutes");
const tableRoutes = require("./routes/tableRoutes");
const app = express();
app.use(cors());
app.use(express.json());
//DB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("MongoDB is Connected!"))
  .catch((err) => {
    console.error(`Error to connect DB: ${err}`);
  });

//Routes
app.use("/api", chefRoutes);
app.use("/api", tableRoutes);

// Listener...
const PORT = 3001;
app.listen(PORT,`0.0.0.0`,() => {
  console.log(`Server is Running over ${PORT}`);
});
