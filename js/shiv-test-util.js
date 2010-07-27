if (!shiv) {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

shiv.test(
  "shiv.map",
  function() {
    return shiv.map([1,2,3], function(x) { return x * 2; });
  },
  function(res) {

    //
    // Array equality has to be tested element by element in JS
    //

    return (
      (res[0] == 2) &&
      (res[1] == 4) &&
      (res[2] == 6)
    );

  }
);

