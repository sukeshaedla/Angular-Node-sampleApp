
var express = require('express');
var path = require('path');
var app = express();
var notes = require('./notesController');
var rootPath = path.normalize(__dirname + '/../');
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(rootPath + '/app'));

app.get('/getNotes:id', notes.get);
app.get('/getNotes', notes.getAll);

app.listen(8000);
console.log('Listening on port 8000');
