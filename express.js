const bodyParser = require("body-parser");
const express = require("express");
const routing = require("api-pack-express");

/** ApiPack configuration */

const apiPack = require("./src/basic/api-pack");
const operations = require("./src/basic/operations");

const router = routing(apiPack, operations);

/** Express app */

const app = express();

app.use(bodyParser.json());

app.use("/express", router);

app.listen(3003);
