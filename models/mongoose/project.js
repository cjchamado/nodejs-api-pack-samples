const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  amount: Number
});

schema.statics.ApiPack = function() {
  return {
    /*
    operations: {
      create: true
    },
    */
    pagination: {
      itemsPerPage: 3
    }
  };
};

module.exports = mongoose.model("Project", schema);
