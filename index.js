var debug = require('debug')('oa-types');
var jjv = require('jjv');
var inherits = require('inherits');
var Map = require('es6-map');

var Type = require('oa-type');

function Types (options) {
  options = options || {};
  debug("constructor", options);
  // call new constructor if not already
  if (!(this instanceof Types)) return new Types(options);

  // save jjv environment
  this.env = options.env || jjv();
  
  // call Map constructor on this
  Map.call(this);

  // use any given types
  if (options.types) {
    for (var id in options.types) {
      debug("use-ing", options.types[id]);
      this.use(options.types[id]);
    }
  }
}
inherits(Types, Map);

Types.prototype.use = function (type) {
  debug("set", type);

  // if not instanceof Type, make into type
  if (!(type instanceof Type)) {
    type = new Type(this.env, type);
  }

  this.set(type.id, type);

  return type;
};

module.exports = Types;
