var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
const simpleGit = require('simple-git')();
const port = 8081

app.get('/', function(req, res) {
  res.end('HI NICOLE :D THE INTERNET NOW KNOWS YOU WET THE BEDDDDD...JK...TEEEHEE\n');
});
app.post('/updateWebsite', function(req, res) {
  console.log('update the website')
  res.end('HI NICOLE :D THE INTERNET NOW KNOWS YOU WET THE BEDDDDD...JK...TEEEHEE\n');
  simpleGit.pull((err,test)=>{
    console.log(err)
    console.log(test)
    console.log('----------')
  })
});

app.listen(port, (err)=>{
  if(err){
  }
  console.log(`listening on ${port}`)
})
