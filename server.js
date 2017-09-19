'use strict';

const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('hcodydibble-portfolio'));
