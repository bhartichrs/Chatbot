'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, message, cb) {

    if(intentData.intent[0].value !== 'isss')
        return cb(new Error(`Expected time intent, got ${intentData.intent[0].value}`));

     return cb(false, 'Office Hours: Monday-Friday, 8 am - 5 pm. For more details visit link http://www.sjsu.edu/isa/');  
}