'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ host: process.env.IP, port: process.env.PORT });

server.bind({
    apiBaseUrl: 'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1',
    webBaseUrl: 'https://itech-node-dineshdhoom.c9users.io'
});

server.register([
    require('inert'),
    require('vision'),
    require('hapi-auth-cookie')
], (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: './views',
        layoutPath: './views/layout',
        layout: true,
        isCached: false,
        helpersPath: './views/helpers',
        partialsPath: './views/partials'
    });

    server.auth.strategy('session', 'cookie', 'try', {
        password: '70fe4f26ff9bcb5aab079875cadeec09',
        isSecure: false
    });

    server.route(require('./routes'));

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log('Server listening at:', server.info.uri);
    });
});
