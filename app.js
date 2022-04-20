var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { initialize } = require("express-openapi");
var swaggerUi = require("swagger-ui-express");

var app = express();

app.listen(3030);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

initialize({
	  app,
	  apiDoc: require("./api/api-doc"),
	  paths: "./api/paths",
});

app.use(
	  "/api-documentation",
	  swaggerUi.serve,
	  swaggerUi.setup(null, {
		      swaggerOptions: {
			            url: `http://${process.env.BACKENDIP}:3030/api-docs`,
			          },
		    })
);

console.log("myport: " + process.env.BACKENDIP);
console.log(`App running on port http://${process.env.BACKENDIP}:3030`);
console.log(`OpenAPI documentation available in http://${process.env.BACKENDIP}:3030/api-documentation`);

module.exports = app;
