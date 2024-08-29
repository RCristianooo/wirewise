const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

//set view engine to ejs
app.set('view engine', 'ejs');

app.listen(2893);

//localhost:2893
app.get('/', function(req, res){
    res.render('pages/index');
});

app.get('/aboutus', function(req, res){
    res.render('pages/aboutus');
})

app.get('/contact', function(req, res){
    res.render('pages/contact');
})