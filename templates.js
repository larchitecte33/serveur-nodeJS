const express = require('express');
const app = express();
const port = 3000;

const arrayCours = [
    ['Algorithme', 'Ce cours traitera de l\'algorithme de Dijkstra.', 'R. Marceau, L. Roma'],
    ['BDD', 'Ce cours portera sur le langage SQL', 'O. Gobart'],
    ['POO', 'Ce cours donnera des bases de programation orientée objet'],
    ['Merise', 'Apprentissage du MCD, du MLD et du MPD'],
    ['UML', 'Ce cours enseignera la création du diagramme de cas d\'utilisation']
];

// Set EJS as templating engine 
app.set('view engine', 'ejs'); 
  
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {  
  res.render("cours", {titreCours: 'Algorithme', descriptifCours: 'Ce cours traitera de l\'algorithme de Dijkstra.'});
});
    
app.all('*', function(req, res) {
    if(/^\/cours\/[0-9]*\/descr$/.test(req.url)) {
        let numeroCours = req.url;
        numeroCours = numeroCours.replace('/cours/', '').replace('/descr', '');
        res.render("cours", {titreCours: arrayCours[numeroCours][0], descriptifCours: arrayCours[numeroCours][1]});
    }
    else {
        res.send('Erreur');
    } 
});

// Server setup
app.listen(3000, function(req, res) {
  console.log("Connected on port:3000");
});