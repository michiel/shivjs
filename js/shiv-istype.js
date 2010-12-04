if (typeof(shiv) == "undefined") {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

//
// JavaScript type checking for ShivJS
//

shiv.exists = function(o) {
  return(
    (o != null) &&
    (typeof(o) != 'undefined')
  );
}

shiv.isBoolean = function(o) {
  return (
    shiv.exists(o) &&
    (typeof(o) == 'boolean')
  );
}

shiv.isString = function(o) {
  return (
    shiv.exists(o) &&
    (typeof(o) == 'string')
  );
}

shiv.isNumber = function(o) {
  return (
    shiv.exists(o) &&
    (typeof(o) == 'number')
  );
}

shiv.isArray = function(o) {
  return (
    shiv.exists(o) &&
    (typeof(o) == 'object') &&
    (typeof(o.length) == 'number')
  );
}

shiv.isObject = function(o){
  return (
    shiv.exists(o) &&
    (typeof(o) == 'object') &&
    (typeof(o.length) == 'undefined') &&
    (!(o instanceof Date))
  );
}

shiv.isDate = function(o){
  return (
    shiv.exists(o) &&
    (typeof(o) == 'object') &&
    (typeof(o.length) == 'undefined') &&
    (o instanceof Date)
  );
}

shiv.isRegEx = function(o){
  return (
    shiv.exists(o) &&
    (typeof(o) == 'function') &&
    (o instanceof RegExp)
  );
}
shiv.isRegExp = shiv.isRegEx; // Alias

