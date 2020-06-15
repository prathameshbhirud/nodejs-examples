var express = require('express');

var app = express();

app.get('/getSample', (req, res) => {
    res.send('Hello from GET API....');
});

app.listen(2000, () => {});

// call http://localhost:2000/getSample to see result.