require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const startListener = require("./listeners/tokenListener");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventRoutes);


// ✅ safer startup
const startServer = async () => {
  await connectDB();        // wait for Mongo
  startListener();          // then start blockchain listener

  app.listen(process.env.PORT, () =>
    console.log("Server running on port", process.env.PORT)
  );
};

startServer();
