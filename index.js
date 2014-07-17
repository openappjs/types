var inherits = require('inherits');
var Map = require('es6-map');

var Type = require('oa-type');

function Types (env) {
  // call new constructor if not already
  if (!(this instanceof Types)) return new Types(env);

  // save jjv environment
  this.env = env;
  
  // call Map constructor on this
  Map.call(this);

  // save Map.set
  this.__set = this.set;
  // and use our set function
  this.set = this._set;
  delete this._set;
}
inherits(Types, Map);

Types.prototype._set = function (type) {

  // if not instanceof Type, make into type
  if (!(type instanceof Type)) {
    type = new Type(this.env, type);
  }

  return this.__set(type.name, type);
};

module.exports = Types;
