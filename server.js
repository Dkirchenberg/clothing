var express = require("express");
var bodyparser = ("body-parser");

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

var exphbs = ("express-handlbars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
  }));
  app.set("view engine", "handlebars");
  
  var routes = require("./controllers/clothing_controller");
  
  app.use(routes);
  
  var PORT = process.env.PORT || 3000;
  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });