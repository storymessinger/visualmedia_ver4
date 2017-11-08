import {GoogleData} from "../app/shared/data/homepage.data";


export function individualRoute(req,res) {

    console.log('retrieiving data');

    const individualId = parseInt(req.params['id']) - 1;

    const individual = GoogleData["people"][individualId];

    console.log(individual);

    res.status(200).json({
        "id": individual.id,
        "name": individual.name,
        "innerHTML" : individual["innerHTML"]
    })
}