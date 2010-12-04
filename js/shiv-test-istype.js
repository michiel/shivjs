if (!shiv) {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

shiv.test(
  "shiv.isBoolean",
  function() {
    return shiv.isBoolean(true);
  },
  function(res) {
    return (
      (res == true)
    );
  }
);

shiv.test(
  "shiv.isString",
  function() {
    return shiv.isString("string");
  },
  function(res) {
    return (
      (res == true)
    );
  }
);

shiv.test(
  "shiv.isNumber",
  function() {
    return shiv.isNumber(1);
  },
  function(res) {
    return (
      (res == true)
    );
  }
);

shiv.test(
  "shiv.isArray",
  function() {
    return shiv.isArray([1,2,3]);
  },
  function(res) {
    return (
      (res == true)
    );
  }
);

shiv.test(
  "shiv.isObject",
  function() {
    return shiv.isObject({});
  },
  function(res) {
    return (
      (res == true)
    );
  }
);

shiv.test(
  "shiv.isDate",
  function() {
    return shiv.isDate(new Date());
  },
  function(res) {
    return (
      (res == true)
    );
  }
);

shiv.test(
  "shiv.isRegExp",
  function() {
    return shiv.isRegExp(/[a-z]/);
  },
  function(res) {
    return (
      (res == true)
    );
  }
);

shiv.test(
  "shiv.exists",
  function() {
    return shiv.exists(null);
  },
  function(res) {
    return (
      (res == false)
    );
  }
);


