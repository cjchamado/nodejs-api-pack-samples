module.exports = {
  getCollection(operation) {
    operation.data = [
      { title: "Item " + Math.random() },
      { title: "Item " + Math.random() },
      { title: "Item " + Math.random() }
    ];
  },
  getItem(operation) {
    operation.data = { title: "Item B" };
  },
  getInstance(operation) {
    operation.data = {};
  }
};
