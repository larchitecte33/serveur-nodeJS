const express = require('express');
const app = express();
const port = 3000;

let middleware2 = function(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.use(middleware2);

app.get('/', function(req, res) {
    res.send('Vous êtes sur la page d\'accueil.');
});

app.get('/private', function(req, res) {
    res.send('Vous êtes sur une page privée.');
});

app.get('/private/mine', function(req, res) {
    res.send('Vous êtes sur une page privée à moi et à moi seul.');
});

app.get('/pictures', function(req, res) {
    res.send('Vous visualisez une image');
});

let middleware1 = function(req, res, next) {
    res.send('La page demandée n\'existe pas.');
    next();
}

app.use(middleware1);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});