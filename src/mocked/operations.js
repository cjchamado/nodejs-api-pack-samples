/**
 * Mapping operations
 */
module.exports = [
  {
    type: "collection",
    method: "get",
    path: "/dummies"
  },
  {
    type: "collection",
    method: "post",
    path: "/dummies"
  },
  {
    type: "item",
    method: "get",
    path: "/dummies/:id"
  },
  {
    type: "item",
    method: "put",
    path: "/dummies/:id"
  },
  {
    type: "item",
    method: "delete",
    path: "/dummies/:id"
  }
];
