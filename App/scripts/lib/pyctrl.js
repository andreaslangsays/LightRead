(function() {

	var INDICATOR = "!COMMAND!";
	
	window.py_ctrl = {
		send: function(params, callback) {
			var id = Math.random().toString();
			// console.time(id);
			requests[id] = callback;
			document.title = null;
			document.title = INDICATOR + JSON.stringify({
				id: id,
				command: params
			});
		},
		receive: function(id, reply) {
			// console.timeEnd(id);
			if (typeof (requests[id]) == 'function') {
				requests[id](reply);
				delete requests[id];
			}
		}
	};
	var requests = py_ctrl.requests = {};

})();