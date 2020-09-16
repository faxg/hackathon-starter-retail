const fs = require('fs');
const util = require('util');
const axios = require('axios'); // see https://github.com/axios/axios#axios-api
const migros = require('../shared/migros-util');

const readFileAsync = util.promisify(fs.readFile);


module.exports = async function (context, req) {
    context.log('MigrosApi: Get Purchases by User');

    //const name = (req.query.name || (req.body && req.body.name));

    try {
        const response = await axios.get(migros.getApiEndpoint() + "products/101924500000", migros.getApiSettings());
        //context.log (reponse);
        const purchaseList = response.data;

        context.res.status (200).json(purchaseList);

    } catch (error) {
        context.log(error);
        context.res.status(500).send(error);
    }




}