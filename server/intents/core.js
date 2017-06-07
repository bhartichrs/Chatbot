'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, message, cb) {
    var general = ' Details about the MS CMPE and SE courses can be found at https://cmpe.sjsu.edu/';

    if(intentData.intent[0].value !== 'core')
        return cb(new Error(`Expected time intent, got ${intentData.intent[0].value}`));
    
    else if (message.text.toLowerCase().includes('computer engineering')||message.text.toLowerCase().includes('cmpe')){
        var cmpe = 'Computer Engineering core courses - CMPE 200, CMPE 240, CMPE 220.';
        return cb(false, cmpe+general); 
    }
    else if (message.text.toLowerCase().includes('software engineering')||message.text.toLowerCase().includes(' se ')){
        var se = 'Software Engineering core courses - CMPE 202, CMPE 272.';
        return cb(false, se+general); 
    }
    else{
        var cm = 'Computer Engineering core courses - CMPE 200, CMPE 240, CMPE 220.\nSoftware Engineering core courses - CMPE 202, CMPE 272';
        return cb(false, cm+general);
    }    
}