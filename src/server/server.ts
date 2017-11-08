import { utf8Encode } from '@angular/compiler/src/util';
declare var require: any

import {GoogleData} from "../app/shared/data/homepage.data";
import * as express from 'express';
import {Application} from 'express';
const bodyParser = require('body-parser');
const fs = require('fs');
// import {individualRoute} from "./individualRoutes";
const app: Application = express();



app.use(bodyParser.json());


console.log('Starting server ...');

// app.route('/api/individual/:id').get(individualRoute);
// app.route('/api/individual/:id').get(req, res){
app.get('/api/individual/:id', function(req,res) {

    const individualId = parseInt(req.params['id']) - 1;
    const individual = GoogleData["people"][individualId];

    var fileRoute = 'src/assets/Contents/People/html/' + individual.name + '/index.html';

    var data = fs.readFileSync(fileRoute,{encoding:'utf8'})
    
    res.status(200).json({
        "id": individual.id,
        "name": individual.name,
        "innerHTML" : data
    })

});

app.get('/api/projectPage/:id', function(req,res) {

    function capitalize(s)
    { return s[0].toUpperCase() + s.slice(1); }

    const individualId = parseInt(req.params['id']) - 1;
    const individual = GoogleData["publications"][individualId];

    var fileRoute = 'src/assets/Contents/Publications/html/' + individual.title + '/index.html';

    var data = fs.readFileSync(fileRoute,{encoding:'utf8'})
    
    console.log(data);
    
    res.status(200).json({
        "id": individual.id,
        "title": individual.title,
        "innerHTML" : data
    })

});

app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});


