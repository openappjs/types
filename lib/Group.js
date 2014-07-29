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
    context: "org:Organization",
    description: "A collection of people and groups.",
    type: 'object',
    properties: {
      name: {
        context: "name",
        description: "The primary name of the group.",
        type: "string",
      },
      description: {
        context: "description",
        description: "A short description of the group.",
        type: "string",
      },
      memberships: {
        context: "org:hasMembership",
        description: "The membership relationships that the group plays.",
        type: "array",
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
