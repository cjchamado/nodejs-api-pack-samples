module.exports = {
  check(operation) {
    if (operation.method.toUpperCase() === "DELETE") {
      // operation.status = 403;
      operation.context.errors.checker.push({
        message: "Unauthorized."
      });
    }
  }
};
