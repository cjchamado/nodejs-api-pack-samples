module.exports = {
  persist(operation) {
    operation.data.id = Math.random();
    operation.data.updatedAt = new Date().toISOString();
  },
  remove(operation) {
    operation.data = null;
  }
};
