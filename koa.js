const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const routing = require("api-pack-koa");

/** ApiPack configuration */

const apiPack = require("./src/basic/api-pack");
const operations = require("./src/basic/operations");

const router = routing(apiPack, operations);
router.prefix("/koa");

/** Koa app */

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

app.listen(3004);
