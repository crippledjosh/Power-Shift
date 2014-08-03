var express = require('express'),
	app = express(),
	http = require('http');

server = http.createServer(app);

app.set('view engine', 'jade');

app.use(express.bodyParser());

require('routes')(server, app);


server.listen(8080);