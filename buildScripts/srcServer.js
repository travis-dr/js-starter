import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

var port = 4000;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
