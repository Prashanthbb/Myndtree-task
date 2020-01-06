var express = require('express');
var bodyParser = require('body-parser');

var upload = require('express-fileupload');


const multer = require('multer');
// initialize our express app
var routes = require('./routes/app.routes');


var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 6000));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload()); // configure middleware
app.use(routes);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
