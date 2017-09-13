'use strict';

const Assets = require('./handlers/assets');
const Products = require('./handlers/products');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: Products.home
},{
    method: 'GET',
    path: '/{param*}',
    handler: Assets.servePublicDirectory
}];
