const express = require('express');
const app = express();
var path    = require("path");

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'page1.html')));
app.get('/page2', (req, res) => res.sendFile(path.join(__dirname, 'page2.html')));
app.get('/page3', (req, res) => res.sendFile(path.join(__dirname, 'page3.html')));
app.get('/page4', (req, res) => res.sendFile(path.join(__dirname, 'page4.html')));
app.get('/page5', (req, res) => res.sendFile(path.join(__dirname, 'page5.html')));

app.use(express.static(path.join(__dirname, 'directory1')));
app.use(express.static(path.join(__dirname, 'directory2')));
app.use('/newLogicalPath', express.static(path.join(__dirname, 'directory3')));

app.get('/externalLink', (req, res) => res.redirect('https://www.google.com/'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/view1', (req, res) => res.render('view1', {'title': 'View 1', 'message': 'Welcome to view 1'}));
app.get('/view2', (req, res) => res.render('view2', {'title': 'View 2', 'message': 'Welcome to view 2'}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));




