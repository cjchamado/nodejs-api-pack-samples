const bodyParser = require("body-parser");
const express = require("express");
// const routing = require(/*"api-pack-express"*/ "../express");

/** ApiPack configuration */

// Mocked
// const apiPack = require("./src/mocked/api-pack");
// const operations = require("./src/mocked/operations");

// Mongoose
// const apiPack = require("../mongoose/api-pack");
// const operations = require("../mongoose/operations");

const mongooseAndExpressApiPackRouter = require("./src/mongoose");

/** Express app */

const app = express();

app.use(bodyParser.json());

app.use("/express", mongooseAndExpressApiPackRouter);

app.listen(3003);
