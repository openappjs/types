module.exports = {
  name: "Person",
  prefixes: {
    "": "http://schema.org/",
    "foaf": "http://xmlns.com/foaf/0.1/#",
    "org": "http://www.w3.org/TR/vocab-org#",
  },
  schema: {
    type: 'object',
    properties: {
      name: {
        type: "string",
        context: "foaf:name",
      },
      memberships: {
        type: "array",
        context: "org:hasMembership",
        items: {
          reverse: "member",
          $ref: "Membership",
        },
      },
    },
  },
};
