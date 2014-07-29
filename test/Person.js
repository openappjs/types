var expect = require('chai').expect;
var jjv = require('jjv');

describe("#oa-types", function () {
  var env = jjv();
  var Types;
  var types;

  it("should require module", function () {
    Types = require('../');
    expect(Types).to.exist;
  });

  it("should create new types map", function () {
    types = new Types({
      env: env,
      types: require('../lib'),
    });
    expect(types).to.exist;
    expect(types).to.have.property("env", env);
  });

  it("should add person type", function () {
    var personSchema = require('../lib/Person');
    var personType = types.use(personSchema);
    expect(types.get(personSchema.id)).to.equal(personType);
    expect(personType).to.exist;
    expect(personType).to.have.property("id", personSchema.id);
    expect(personType).to.have.property("schema", personSchema);
    expect(personType).to.have.property("env", env);
    expect(personType).to.have.property("validate");
    expect(personType).to.have.property("context");
  });

  it("should be idempotent", function () {
    var person = require('../lib/Person');
    types.set(person);
  });
})
