var shiv = {
  version    : '0.01',
  loading    : false,
  shivPrefix : '',
  modules    : {}
};

shiv.addOnLoad = (function() {
    var onload = window.onload;
    var loadqueue = [];
    window.onload = function() {
      onload && onload();
      for (var i=0; i<loadqueue.length; i++) {
        loadqueue[i]();
      }
    }
    return function(func) {
      loadqueue.push(func);
    }
  })();

shiv.log = (function() {
    if (window.console != null) {
      return function(msg) {
        console.debug(msg);
      };
    } else {
      return function() {};
    }
  })();

shiv.xhr = (function() {
  if (typeof XMLHttpRequest != "undefined") {
      return new XMLHttpRequest();
  } else if (typeof ActiveXObject != "undefined") {
      return new ActiveXObject("Microsoft.XMLHTTP");
  } else {
      throw new Error("XMLHttpRequest not supported");
  }
})();

shiv.post = function(opts) {
  var xhr = shiv.xhr;

  xhr.open( "POST", 
    opts.url  || '/' , 
    opts.sync || false
  );

  xhr.setRequestHeader(
    "Content-type", 
    opts.contentType || "application/json"
  );

  xhr.setRequestHeader("Content-length", opts.body.length);
  xhr.setRequestHeader("Connection", "close");

  xhr.send(opts.body);

}

shiv.get = function(opts) {
  var xhr = shiv.xhr;

  xhr.open( "GET", 
    opts.url  || '/' , 
    opts.sync || false
  );

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      switch (xhr.status) {
      case 200: 
        opts.callback(xhr.responseText);
        break;
      default:
        shiv.log("Optimism is insufficient for this operation!");
        break;
      }
    }
  }
  xhr.send();
}

shiv.load = function(res) {
  if (shiv.modules[res] != null) {
    shiv.log("shiv.load : Resource " + res + " already loaded");
  } else {

    shiv.get({
        url      : shiv.shivPrefix + res + '.js',
        sync     : true,
        callback : function(data) {
          shiv.modules[res] = true;
          shiv.log("shiv.load.callback : loading resource " + res.toString() + " succeeded.");
          eval(data); // Yeah, yeah, I know - eval is evil.
        }
      });
  }
}

