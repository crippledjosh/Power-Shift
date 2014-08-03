Power-Shift
===========


Requirements
Must have nodeJS already installed on system.

To run server go to "node" directory in a terminal window and type command "node app.js"
This may have to be run as sudo, depending on setup. 
This should start server.


Now go to localhost:8080 in a web browser and you should receive a simple web page asking for a postcode or city and a number of days between 1 and 5.
For some reason the weather api used "worldweatheronline.com" cannot handle full post codes and also does not recognise Leamington Spa as a UK city, the system is currently only allowing UK cities and postcodes.