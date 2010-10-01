if (!shiv) {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

shiv.sequence = function(arr) {

  arr  = arr || [];
  var self    = this;

  this.start = function(cb) {
    cb && self.add(cb);
    this.next();
  }

  this.startCallback = function(cb) {
    return function() {
      self.next();
    }
  }

  this.add = function(cb) {
    arr.push(cb);
  }

  this.next = function() {
    if (arr.length != 0) {
      arr.shift()(function() {
        self.next();
      });
  }

}

