'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, message, cb) {

    if(intentData.intent[0].value !== 'greeting')
        return cb(new Error(`Expected greeting intent, got ${intentData.intent[0].value}`));
    
    if (message.user == 'U55HW6V27')
    	var name = 'Sampada'
    else if	(message.user == 'U55L2DDDG')
    	var name = 'Dharmisha'
    else if (message.user == 'U55RRGV2Q')
    	var name = 'Bharti'
    else
    	var name ='user'

    
     return cb(false, 'Hi ' + name + '! How may I help you?' );  
}