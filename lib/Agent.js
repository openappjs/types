module.exports = {
  id: "Agent",
  allOf: [{
    $ref: "Thing",
  }, {
    prefixes: {
      "foaf": "http://xmlns.com/foaf/0.1/",
    },
    context: "foaf:Agent",
    properties: {
      // TODO: how to express
      // http://schema.org/memberOf
    },
  }],
};
