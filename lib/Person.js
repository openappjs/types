module.exports = {
  id: "Person",
  allOf: [{
    $ref: "Agent",
  }, {
    prefixes: {
      "": "http://schema.org/",
      "org": "http://www.w3.org/TR/vocab-org#",
    },
    context: "Person",
    description: "A person.",
    type: 'object',
    properties: {
      name: {
        context: "name",
        description: "The name of the person.",
        type: "string",
      },
      memberships: {
        context: "org:hasMembership",
        description: "The membership relationships that the person plays.",
        type: "array",
        items: {
          reverse: "member",
          $ref: "Membership",
        },
      },
    },
  }],
};
