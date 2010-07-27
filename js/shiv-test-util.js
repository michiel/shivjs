if (!shiv) {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

shiv.test(
  "shiv.map",
  function() {
    return shiv.map([1,2,3], function(x) { return x * 2; });
  },
  function(res) {
    return (
      (res[0] == 1) &&
      (res[1] == 4) &&
      (res[2] == 6)
    );
  }
);

