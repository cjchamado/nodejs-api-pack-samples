const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  status: String,
  priority: Number,
  closed: Boolean,
  openedAt: Date,
  closedAt: Date
});

schema.statics.ApiPack = function() {
  return {
    filters: {
      search: {
        properties: {
          title: "ipartial"
        }
      }
    },
    pagination: {
      // enabled: false,
      // clientEnabled: true,
      // enabledParameter: "pager",
      itemsPerPage: 4
      // clientItemsPerPage: true,
      // maxItemsPerPage: 6
      // itemsPerPageParameter: "ipp"
    }
  };
};

module.exports = mongoose.model("Task", schema);
