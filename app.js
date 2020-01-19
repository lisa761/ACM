var express = require("express"),
	app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("events");
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Events page running!");
})