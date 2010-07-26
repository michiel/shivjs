if (!shiv) {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

//
// Trivial hitch
//

shiv.hitch = function(scope, func) {
  return function() {
    func.apply(scope);
  };
}

shiv.map = function(arr, func) {
  var ret = [];
  for (var i=0; i<arr.length; i++) {
    ret.push(func(arr[i]));
  }
  return ret;
}

shiv.memo = function(arr, func) {
  var mem = null;
  for (var i=0; i<arr.length; i++) {
    func(arr[i], mem);
  }
  return mem;
}

shiv.contains = function(arr, value) {
  var found = false;
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == value) {
      found = true;
    }
  }
  return found;
}

shiv.runAll = function(arr) {
  var ret = [];
  for (var i=0; i<arr.length; i++) {
    ret.push(arr[i]());
  }
  return ret;
}

