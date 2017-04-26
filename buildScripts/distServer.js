import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

var port = 4000;
var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  //Hard coded for dev purposes.
  res.json([
    {"id": 1, "firstName": "Saul", "lastName" : "Goodman", "email": "better@callsaul.com"},
    {"id": 2, "firstName": "Walter", "lastName" : "White", "email": "walt@ice.com"},
    {"id": 3, "firstName": "Jesse", "lastName" : "Pinkman", "email": "jesse@ice.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
