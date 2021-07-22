const http = require('http');
const fs = require('fs');
const port = 8080;
let contenuFichier = "";
let erreurLecture = "";

const server = http.createServer((req, res) => {
    fs.readFile('fichierTexte.txt', 'utf8', (err, data) => {
        if(err) {
            erreurLecture = 'Une erreur est survenue lors de la lecture du fichier : ' + err;
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/html');
            res.end(erreurLecture);                
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html;charset=utf-8');

            let reponse = '<html>' +
                          '  <head>' +
                          '    <h1>Contenu du fichier texte</h1>' +
                          '  </head>' +
                          '  <body>' + 
                               data +
                          '  </body>' +
                          '  <footer>' +
                          '    <center>Ce site est créé via Node.js.</center>' +
                          '  </footer>' +
                          '</html';
            res.end(reponse);
        }
    })
})

server.listen(port, () => {
    console.log(`Le serveur est lancé sur le port ${port}`)
})