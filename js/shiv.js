var shiv = {
  version : '0.01',
  loading : false,
  modules : {}
};

shiv.log = (function() {
    return function(msg) {
      console.debug(msg);
    };
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

  xhr.open(
    "POST", 
    opts.url   || '/' , 
    opts.async || false
  );

  xhr.setRequestHeader(
    "Content-type", 
    opts.contentType || "application/json"
  );

  xhr.setRequestHeader("Content-length", opts.body.length);
  xhr.setRequestHeader("Connection", "close");

}

shiv.get = function(opts) {
  var xhr = shiv.xhr;

  xhr.open(
    "GET", 
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
  alert("sending");
  xhr.send();
}

shiv.load = function(res) {
  shiv.get({
      url      : res,
      sync     : true,
      callback : function(data) {
        shiv.log("Callback succeeded.");
        eval(data); // Yeah, yeah, I know - eval is evil.
      }
    });
}




