require.config({
		baseUrl: "./js",
		waitSeconds: 10,
		packages: [{
			name: "jquery",
			location: "./libs/jquery",
			main: "jquery"
		},
		{
			name: "socket.io",
			location: "../socket.io",
			main: "socket.io"
		},
		{
			name: "bootstrap",
			location: "./libs/bootstrap",
			main: "bootstrap"
		},

		]
	});