const mongoose = require("mongoose")
const DB_URL = `mongodb+srv://admin:${process.env.DB_PASS}@cluster0.qfgtqmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(DB_URL)
.then(() => {
  console.log("database connected");
})
.catch(err => {
  console.log("database error: ", err);
})
