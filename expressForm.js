var express = require('express');
var app = express.createServer();
app.use(express.bodyParser());

app.listen(3000);

app.use(express.static(__dirname));

app.post('/', function(req, res){
  console.log(req.body);
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  res.redirect('back');
});


