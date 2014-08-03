var express = require('express'),
	app = express(),
	http = require('http');

server = http.createServer(app);

app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.cookieParser('Sometimes I pretend I"m a car.'));
app.use(express.session());
app.use(function(req, res, next){
	var err = req.session.error,
	msg = req.session.success;
	delete req.session.error;
	delete req.session.success;
	res.locals.message = '';
	if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
	if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
	next();
});

require('routes')(server, app);


server.listen(8080);