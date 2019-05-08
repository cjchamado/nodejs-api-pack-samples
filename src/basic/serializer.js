module.exports = {
  serialize(operation) {
    delete operation.data.context;
    delete operation.data.email;
  },
  deserialize(operation, data = {}) {
    Object.keys(data).map(property => {
      operation.data[property] = data[property];
    });
  }
};
