const express = require('express');
const app = express();
const port = 3000;

app.all('*', function(req, res) {
    console.log(req.url);
    if(/^\/cours\/[0-9]*\/descr$/.test(req.url)) {
        let numeroCours = req.url;
        numeroCours = numeroCours.replace('/cours/', '').replace('/descr', '');
        res.send('Vous avez demandé le cours numéro ' + numeroCours);
    }
    else {
        res.send('Erreur');
    } 
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});