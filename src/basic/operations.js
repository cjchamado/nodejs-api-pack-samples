/**
 * Mapping operations
 */
module.exports = [
  {
    type: "collection",
    method: "GET",
    path: "/"
  },
  {
    type: "collection",
    method: "post",
    path: "/"
  },
  {
    type: "item",
    method: "GET",
    path: "/:id"
  },
  {
    type: "item",
    method: "put",
    path: "/:id"
  },
  {
    type: "item",
    method: "delete",
    path: "/:id"
  }
];
