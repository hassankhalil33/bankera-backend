const express = require("express");
require("dotenv").config();

const serverPort = process.env.SERVER_PORT;
const app = express();

app.listen(serverPort, () => {
  console.log (`Running On Port: ${serverPort}`);
});
