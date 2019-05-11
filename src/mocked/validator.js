module.exports = {
  validate(operation) {
    return;
    if (operation.method.toUpperCase() === "PUT") {
      // operation.status = 406;
      operation.context.errors.validator.push({
        message: "Validation error"
      });
    }
  }
};
