var express = require ("express");
var app = express();
var PORT = process.env.PORT || 5000;
var  path = require("path");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function(){
    console.log("Server is listening on http://localhost:" + PORT);
});