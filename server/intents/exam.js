'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, message, cb) {

    if(intentData.intent[0].value !== 'exam')
        return cb(new Error(`Expected time intent, got ${intentData.intent[0].value}`));
    else if (message.text.includes('273'))
        return cb(false, 'CMPE 273 exam will be held on 24th May, 2017 in SCI-142 room');
    else 
        return cb(false, 'Please check link for Spring 2017 final exam schedule: http://info.sjsu.edu/static/catalog/final-exam-schedule-spring.html');  
}