const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
    fs.readFile('./employes.json', 'utf8', (error, employes) => {
        if(error) {
            console.log(error);
            return false;
        }

        res.send(employes);
    });
});



app.listen(3000, function(){
    console.log('Server started at port 3000');
});