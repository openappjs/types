var debug = require('debug')('oa-types');
var jjv = require('jjv');
var inherits = require('inherits');
var Map = require('es6-map');

var Type = require('oa-type');

function Types (env) {
  debug("constructor", env);
  // call new constructor if not already
  if (!(this instanceof Types)) return new Types(env);

  // save jjv environment
  this.env = env || jjv();
  
  // call Map constructor on this
  Map.call(this);
}
inherits(Types, Map);

Types.prototype.use = function (type) {
  debug("set", type);

  // if not instanceof Type, make into type
  if (!(type instanceof Type)) {
    type = new Type(this.env, type);
  }

  this.set(type.name, type);

  return type;
};

module.exports = Types;
