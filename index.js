const express = require("express");
const PORT = 9000;
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// Load environment variables from .env
require("dotenv").config();

// Set strictQuery to false to remove the deprecation warning
mongoose.set("strictQuery", false);

// our schema imported here
app.use(cors());

// our database connection using the MONGO_DATABASE variable from .env
const mongoDB = process.env.MONGO_DATABASE;
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("mongodb connected to server");
  })
  .catch((err) => {
    console.error("mongodb isn't connected to server:", err);
  });

// user schema imported
require("./model/index.js");

// This is middleware
app.use(express.json());

// This is how we use routers in Node.js
app.use(require("./routes/index"));

app.listen(PORT, () => {
  console.log("Server started on port 9000");
});
