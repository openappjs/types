module.exports = {
  id: "Person",
  allOf: [{
    $ref: "Agent",
  }, {
    prefixes: {
      "": "http://schema.org/",
      "org": "http://www.w3.org/TR/vocab-org#",
    },
    type: 'object',
    context: "Person",
    properties: {
      name: {
        context: "name",
        type: "string",
      },
      memberships: {
        context: "org:hasMembership",
        type: "array",
        items: {
          reverse: "member",
          $ref: "Membership",
        },
      },
    },
  }],
};
