var express = require('express');

var app = express();

// Set up "Handlebars view engine"
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT);

//ROUTES
app.get('/', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res) {
    res.render('about');
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


