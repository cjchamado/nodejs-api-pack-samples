require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true
});

// LOAD API PACK (mongoose + express)
const { ApiPack } = require("@kolinalabs/api-pack-mongoose");
const router = require("@kolinalabs/api-pack-express");

// MAPPING MODELS [Model1, Model2, ModelN, ...]
const { Project, Task } = require("./models/mongoose");
const models = [Project, Task];

// INIT API PACK
const apiPack = new ApiPack(models);

// ADD CUSTOM EXTENSION
const CustomExtension = {
  name: "CustomExtension",
  supports: "item:put",
  apply(query, operation) {
    // Increment your query here
    // e.g.: query.where('property', 'value')
    // console.log("Supports for " + this.supports);
  }
};

apiPack.addExtension(CustomExtension);

// GET ROUTES
const routes = apiPack.routing(router);

// INIT APP
const app = express();
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(process.env.EXPRESS_PORT);
