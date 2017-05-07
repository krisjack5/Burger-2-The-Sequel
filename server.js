var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = 3007;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgerController.js");

app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);

});