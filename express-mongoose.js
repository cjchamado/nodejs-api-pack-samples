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

// GET ROUTES
const apiPack = new ApiPack(models);
const routes = apiPack.routing(router);

// INIT APP
const app = express();
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(process.env.EXPRESS_PORT);
