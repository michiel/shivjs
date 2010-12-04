if (typeof(shiv) == "undefined") {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

//
// JavaScript type checking for ShivJS
//

shiv.isBoolean = function(o) {
  return (
    (typeof(o) == 'boolean')
  );
}

shiv.isString = function(o) {
  return (
    (typeof(o) == 'string')
  );
}

shiv.isNumber = function(o) {
  return (
    (typeof(o) == 'number')
  );
}

shiv.isArray = function(o) {
  return (
    (typeof(o) == 'object') &&
    (typeof(o.length) == 'number')
  );
}

shiv.isObject = function(o){
  return (
    (typeof(o) == 'object') &&
    (typeof(o.length) == 'undefined') &&
    (!(o instanceof Date))
  );
}

shiv.isDate = function(o){
  return (
    (typeof(o) == 'object') &&
    (typeof(o.length) == 'undefined') &&
    (o instanceof Date)
  );
}

shiv.isRegEx = function(o){
  return (
    (typeof(o) == 'function') &&
    (o instanceof RegExp)
  );
}
shiv.isRegExp = shiv.isRegEx; // Alias

shiv.exists = function(o) {
  return(
    (o != null) &&
    (typeof(o) != 'undefined')
  );
}

