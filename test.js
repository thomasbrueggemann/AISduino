var net = require("net");

// start a TCP Server
net.createServer(function(socket) {

	setTimeout(function() {
		socket.write("Welcome " + socket.name + "\n");
	}, 500);

}).listen(8888);

// Put a friendly message on the terminal of the server.
console.log("AISdruino test server listening on port 8888\n");