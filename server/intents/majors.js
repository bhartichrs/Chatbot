'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, message, cb) {

    if(intentData.intent[0].value !== 'majors')
        return cb(new Error(`Expected time intent, got ${intentData.intent[0].value}`));

     return cb(false, 'Computer Engineering, Software Engineering, Computer Science, Electrical Engineering');  
}