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

  describe("Person", function () {

    it("should have correct context", function () {
      expect(types.get("Person").context())
      .to.deep.equal({
        "@vocab": "http://schema.org/",
        "org": "http://www.w3.org/TR/vocab-org#",
        "memberships": "org:hasMembership",
      });
    });
  });
});
