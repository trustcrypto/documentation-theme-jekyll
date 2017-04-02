var express = require('express');
var bodyParser = require('body-parser');
var engines = require('consolidate');
var app = express();
var https = require('https');
var fs = require('fs');
var u2f = require('u2f');

var APP_ID = "https://localhost:4433";

var SECRET_DATA = require("./secret_data.json");

app.use(bodyParser.json());
app.use(require('cookie-parser')());
app.engine('html', engines.hogan);

var Sessions = {};
var Users = {};

app.get('/', function(req, res) {
  if (!req.cookies.userid) {
    res.cookie('userid', Math.floor(Math.random() * 100000));
  }
  res.render('index.html');
});

app.get('/api/register_request', function(req, res) {
  var authRequest = u2f.request(APP_ID);
  Sessions[req.cookies.userid] = { authRequest: authRequest };
  res.send(JSON.stringify(authRequest));
});

app.get('/api/sign_request', function(req, res) {
  var authRequest = u2f.request(APP_ID, Users[req.cookies.userid].keyHandle);
  Sessions[req.cookies.userid] = { authRequest: authRequest };
  res.send(JSON.stringify(authRequest));
});

app.post('/api/register', function(req, res) {
  console.log(req.body);
  var checkRes = u2f.checkRegistration(
    Sessions[req.cookies.userid].authRequest,
    req.body
  );
  console.log(checkRes);
  if (checkRes.successful) {
    Users[req.cookies.userid] = { publicKey: checkRes.publicKey, keyHandle: checkRes.keyHandle };
    res.send(true);
  } else {
    res.send(checkRes.errorMessage);
  }
});
app.post('/api/authenticate', function(req, res) {
  console.log(req.body);
  var checkRes = u2f.checkSignature(
    Sessions[req.cookies.userid].authRequest,
    req.body,
    Users[req.cookies.userid].publicKey
  );
  console.log(checkRes);
  if (checkRes.successful) {
    res.send({ success: true, secretData: SECRET_DATA });
  } else {
    res.send({ error: checkRes.errorMessage });
  }
});

var credentials = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4433);
