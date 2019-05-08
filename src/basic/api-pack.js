/**
 * ApiPack configuration
 */
const ApiPack = require("nodejs-api-pack");
const { checker, provider, persister, serializer, validator } = require(".");

const apiPack = new ApiPack();

apiPack.checker(checker);
apiPack.persister(persister);
apiPack.provider(provider);
apiPack.serializer(serializer);
apiPack.validator(validator);

module.exports = apiPack;
