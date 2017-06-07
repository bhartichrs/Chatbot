'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, message, cb) {

    if(intentData.intent[0].value !== 'population')
        return cb(new Error(`Expected time intent, got ${intentData.intent[0].value}`));
    
    return cb(false, 'The current population of SJSU is 32773.');  
}