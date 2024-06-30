const express = require("express");
require("dotenv").config();
require("./config/db.config");

const serverPort = process.env.SERVER_PORT;

const app = express();

app.listen(serverPort, (err) => {
  if(err) throw err;
  console.log (`Running On Port: ${serverPort}`);
});
