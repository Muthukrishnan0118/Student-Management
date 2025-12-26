const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => console.log("mongoose Connected"))
  .catch((err) => console.log(err));

const studentroutes = require("./routes/Studentroutes");
app.use("/students", studentroutes);

app.listen(3000, () => {
  console.log("Server running on port 3000 ");
});
