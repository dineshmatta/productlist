'use strict';

const Wreck = require('wreck');

exports.home = function (request, reply) {

    //Here apibaseUrl is the third party API url which is being set in the index.js
    const apiUrl = this.apiBaseUrl;

    Wreck.get(apiUrl, { json: true }, (err, res, payload) => {

        if (err) {
            throw err;
        }
        

        reply.view('index', {
            products: payload.productList,
        });
        
        
    });
};
