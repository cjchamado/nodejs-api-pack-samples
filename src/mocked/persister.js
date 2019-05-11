module.exports = {
  persist(operation) {
    operation.data.id = Math.random();
  },
  remove(operation) {
    operation.data = null;
  }
};
