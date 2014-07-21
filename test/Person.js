var expect = require('chai').expect;
var jjv = require('jjv');

describe("#types", function () {
  var env = jjv();
  var Types;
  var types;

  it("should require module", function () {
    Types = require('../');
    expect(Types).to.exist;
  });

  it("should create new types map", function () {
    types = new Types(env);
    expect(types).to.exist;
    expect(types).to.have.property("env", env);
  });

  it("should add person type", function () {
    var person = require('../lib/Person');
    var personType = types.use(person);
    expect(types.get(person.name)).to.equal(personType);
    expect(personType).to.exist;
    expect(personType).to.have.property("name", person.name);
    expect(personType).to.have.property("schema", person.schema);
    expect(personType).to.have.property("env", env);
    expect(personType).to.have.property("validate");
    expect(personType).to.have.property("context");
  });

  it("should be idempotent", function () {
    var person = require('../lib/Person');
    types.set(person);
  });
})
