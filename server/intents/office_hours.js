/**
 * code for office hours
 */
'use strict';

const request = require('superagent');

module.exports.process = function process(intentData,message,cb) {
    if(intentData.intent[0].value!='office_hours')
        return cb(new Error(`Expected office_hours intent, got ${intentData.intent[0].value}`));
    else if (message.text.includes('library')||message.text.includes('mlk'))
    	 return cb(false, 'Library hours are from 8:00 a.m to 9:00 pm in weekdays'); 
    else {
    	return cb(false,'CMPE faculty office hours can be viewed at\n https://cmpe.sjsu.edu/content/office-hours');
    }
    
}