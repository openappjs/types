module.exports = {
  id: "Thing",
  prefixes: {
    "": "http://schema.org/",
  },
  type: 'object',
  context: "Thing",
  properties: {
    name: {
      context: "name",
      description: "The name of the thing.",
      type: "string",
    },
    description: {
      context: "description",
      description: "A short description of the thing.",
      type: "string",
    },
  },
};
