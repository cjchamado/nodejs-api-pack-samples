const express = require("express");
const bodyParser = require("body-parser");

const ApiPack = require("./src/mocked/api-pack");
const operations = require("./src/mocked/operations");

const router = express.Router();

function Stack(operation) {
  return [
    // initialization
    (req, res, next) => {
      operation.context = {
        request: req,
        errors: {
          checker: [],
          validator: []
        }
      };
      ApiPack.operation = operation;
      req.ApiPack = ApiPack;
      next();
    },
    // read
    (req, res, next) => {
      req.ApiPack.read();
      next();
    },
    // deserialize
    (req, res, next) => {
      req.ApiPack.deserialize(req.body);
      next();
    },
    // check
    (req, res, next) => {
      req.ApiPack.check();
      if (req.ApiPack.errors("checker").length) {
        return res
          .status(req.ApiPack.operation.status || 401)
          .send(req.ApiPack.errors("checker"));
      }
      next();
    },
    // validate
    (req, res, next) => {
      req.ApiPack.validate();
      next();
    },
    // write
    (req, res, next) => {
      req.ApiPack.write();
      next();
    },
    // serialize
    (req, res, next) => {
      req.ApiPack.serialize();
      next();
    },
    // respond
    (req, res, next) => {
      let status = 200;
      if (!req.ApiPack.operation.data) {
        status = 204;
      } else if (req.ApiPack.operation.type === "collection") {
        status = 201;
      }
      res.status(status).send(req.ApiPack.operation.data);
    }
  ];
}

operations.forEach(operation => {
  router[operation.method](operation.path, Stack(operation));
});

const app = express();
app.use(bodyParser.json());

app.use("/api-pack", router);

app.listen(3007);
