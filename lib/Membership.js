module.exports = {
  id: "Membership",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "org": "  http://www.w3.org/ns/org#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
  },
  description: "A relationship between a member and a group.",
  context: "org:Membership",
  properties: {
    label: {
      description: "A label describing the membership.",
      context: "skos:prefLabel",
      type: "string",
    },
    role: {
      description: "The role that the member fulfills in the organization",
      context: "org:role",
      type: "string",
    },
    member: {
      description: "The person or group that is a member of the group.",
      context: "org:member",
      oneOf: [{
        $ref: "Person",
      }, {
        $ref: "Group",
      }],
    },
    group: {
      description: "The organization in which the person or organization is a member.",
      context: "org:organization",
      $ref: "Group",
    },
    startDate: {
      description: "The start date of the membership.",
      context: {
        "@id": "validFrom",
        "@type": "xsd:dateTime",
      },
      type: "string",
      format: "date-time",
    },
    endDate: {
      description: "The end date of the membership.",
      context: {
        "@id": "validUntil",
        "@type": "xsd:dateTime",
      },
      type: "string",
      format: "date-time",
    },
  },
};
