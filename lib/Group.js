module.exports = {
  id: "Group",
  allOf: [{
    $ref: "Agent",
  }, {
    prefixes: {
      "": "http://schema.org/",
      "foaf": "http://xmlns.com/foaf/0.1#",
      "org": "http://www.w3.org/TR/vocab-org#",
    },
    type: 'object',
    properties: {
      name: {
        type: "string",
      },
      memberships: {
        type: "array",
        context: "org:hasMembership",
        items: {
          reverse: "group",
          $ref: "Membership",
        },
      },
    },
    // TODO: how to describe
    // http://schema.org/member
  }],
};
