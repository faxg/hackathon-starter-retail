/*
Please use async / promise style operations. 
You can "promisify" synchronous operations, e.g. read from a local file

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
*/

const axios = require('axios'); // see https://github.com/axios/axios#axios-api
const migros = require('../shared/migros-util');


/**
 * Sample use of Migros M-API.
 * For full docs see https://api.migros.ch/doc/products 
 */
module.exports = async function (context, req) {
    context.log('MigrosApi: Search for products');
      // get API endpoint
      const endpoint = migros.getApiEndpoint();
     // get Auth etc settings
      const config = migros.getApiSettings(); 
  
      // add search query params (see api docs for details)
      config.params = {
        search: (req.query.text || req.query.search || undefined),
        limit: (req.query.limit  || 10),
        offset: (req.query.offset || 0)
      };


    try {
        // async HTTP request
        var response = undefined;
        var productList = undefined;

        if (! req.query.id) {
          // If no "id" param specified: do free text search for products based on "text" query param.
          // if no "search/text" query param is provided, this will return ALL products
          response = await axios.get(`${endpoint}/products`, config);
          productList = response.data.products;
        } else {
          // if "id" param specified:  do an exact "byID" lookup of a product
          response = await axios.get(`${endpoint}/products/${req.query.id}`, config);
          productList = response.data;
        }
         


        context.res.status (200).json(productList);

    } catch (error) {
        context.log(error);
        context.res.status(500).send(error);
    }




}
