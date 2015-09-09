var express = require('express');

var app = express();

var fortunes = [
 "Conquer your fears or they will conquer you.",
 "Rivers need springs.",
 "Do not fear what you don't know.",
 "You will have a pleasant surprise.",
 "Whenever possible, keep it simple.",
];


// Set up "Handlebars view engine"
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT);

//ROUTES
//Static 'middleware'
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res) {
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune : randomFortune });
});

// 404 Page
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

// 505 Page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.');
});


