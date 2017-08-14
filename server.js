var express = require ('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

// Style Sheets and images
app.use(express.static(__dirname + '/public/assets/css'));
app.use(express.static(__dirname + '/public/assets/images'));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);