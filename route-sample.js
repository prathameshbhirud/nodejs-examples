var express = require('express');

var app = express();

app.get('/node', (req, res) => {
    res.send("Node Tutorial");
});

app.get('/angular', (req, res) => {
    res.send('Angular Tutorial');
});

app.get('/', (req, res) => {
    res.send('Learning new....');
});

app.listen(2000, () => {});