const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/api_pack_samples", {
  useNewUrlParser: true
});

const {
  OperationFactory,
  Persister,
  Provider,
  Serializer
} = require("../../../mongoose/src/");

// load, instance, configure - ApiPack
const ApiPack = require(/*"nodejs-api-pack"*/ "../../../core");

const apiPack = new ApiPack();

apiPack
  .persister(Persister)
  .provider(Provider)
  .serializer(Serializer);

// api-pack-express
const routing = require(/*"api-pack-express"*/ "../../../express");

// api-pack-mongoose

// load models
const { Task } = require("./models");
const models = [Task];

// load operation factory + create operations from models
const operations = OperationFactory.create(models);

// load express router
const router = routing(apiPack, operations);

module.exports = router;
