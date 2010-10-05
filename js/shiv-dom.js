if (!shiv) {
  throw(new Error("Don't load this file directly! Use shiv.load()"));
}

shiv._getIEDispatch = function() {
	var dis = function(e) {
		//visible scope is better than invisible
		return dis.fnc.call( dis.node, e || window.event );
	}
	return dis;
}

shiv.connect = function (node, event, fnc) {
	if (node.addEventListener) {
		shiv.connect = function(node, event, fnc) {
			event = /^on/.test(event) ? event.substr(2) : event;
			node.addEventListener( event , fnc, false );

			return [ node, event, fnc ];
		}
	} else if (node.attachEvent) {
		shiv.connect = function(node, event, fnc) {
			event = /^on/.test(event) ? event : 'on' + event;
			var d   = fnc,
				fnc = shiv._getIEDispatch();

			fnc.fnc  = d
			fnc.node = node;

			node.attachEvent( event, fnc );

			return [ node, event, fnc ];
		}
	}

	return shiv.connect( node, event, fnc );
}

shiv.disconnect = function(h) {
	var node = h[0];
	if (node.removeEventListener) {
		disconnect = function(h) {
			h[0].removeEventListener( h[1], h[2], false );
		}
	} else if (node.detachEvent) {
		disconnect = function(h) {
			h[0].detachEvent( h[1], h[2] );
		}
	}
	return disconnect( h );
}

shiv.apos = function(node) {
	var offsetX = 0;
	var offsetY = 0;
	var cn = node;

	do {
		offsetX += cn.offsetLeft;
		offsetY += cn.offsetTop;
	}while ((cn = cn.parentNode) !=null && cn.nodeName.toLowerCase() != "html");

	return {
		left : offsetX,
		top  : offsetY
	};
}
