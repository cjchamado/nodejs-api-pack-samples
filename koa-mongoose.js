require("dotenv").config();

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true
});

// LOAD API PACK (mongoose + koa)
const { ApiPack } = require("@kolinalabs/api-pack-mongoose");
const router = require("@kolinalabs/api-pack-koa");

// MAPPING MODELS [Model1, Model2, ModelN, ...]
const { Task } = require("./models/mongoose");
const models = [Task];

// GET ROUTES
const apiPack = new ApiPack(models);
const routing = apiPack.routing(router);
routing.prefix("/api");

// INIT APP
const app = new Koa();
app.use(bodyParser());
app.use(routing.routes());

app.listen(process.env.KOA_PORT);
