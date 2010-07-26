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

