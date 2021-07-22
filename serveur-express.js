const express = require('express');
const app = express();
const port = 3000;

let middleware1 = function(req, res, next) {
    console.log("Logué");
    next();
};

app.use(middleware1);

app.get('/about', function(req, res) {
    console.log('requête reçue à : ' + Date.now());
    console.log('Envoi des infos')
    res.send('auteur : William Shakespeare');
});

app.all('*', function(req, res) {
    if(!/^about/.test(req.url)) {
        console.log('requête reçue à : ' + Date.now());
        console.log('abort');
        res.sendStatus(404);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});