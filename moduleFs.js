const fs = require('fs');

fs.readFile('fichierTexte.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }

    console.log(data);
})

console.log("reading file, please wait");