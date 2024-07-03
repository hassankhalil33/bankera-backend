const express = require("express");
require("dotenv").config();
require("./config/db.config");

const userRoutes = require("./routes/user.routes");

const serverPort = process.env.SERVER_PORT;

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(serverPort, (err) => {
  if(err) throw err;
  console.log (`Running On Port: ${serverPort}`);
});
