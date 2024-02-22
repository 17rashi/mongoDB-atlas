const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

//now its a time to parse the data recieved
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //it will store the objects in req.body

//now its a time to write get and post method for menu.js
app.get("/", (req, res) => {
  res.send("server is started");
});

//import the router files
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

//Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Port is listening to 3000");
});
