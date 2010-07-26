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

