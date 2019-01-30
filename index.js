var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

const port = 8080

app.get('/', function(req, res) {
  res.end('The Future will happen\n');
});
app.get('/updateWebsite', function(req, res) {
  console.log('update the website')
  res.end('The Future will happen\n');

});

app.listen(port, (err)=>{
  if(err){
  }
  console.log(`listening on ${port}`)
})
