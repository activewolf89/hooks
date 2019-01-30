var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
const simpleGit = require('simple-git')();
const port = 8081

app.get('/', function(req, res) {
  res.end('i think we are pretty close to ready\n');
});
app.post('/updateWebsite', function(req, res) {
  console.log('update the website')
  res.end('i think we are pretty close to ready\n');
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
