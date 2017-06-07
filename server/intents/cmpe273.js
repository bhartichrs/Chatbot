'use strict';

const request = require('superagent');

module.exports.process = function process(intentData,message,cb) {
    if(intentData.intent[0].value !== 'cmpe273')
        return cb(new Error(`Expected cmpe273 intent, got ${intentData.intent[0].value}`));
   
    else if (message.text.toLowerCase().includes('information')||message.text.toLowerCase().includes('more')||message.text.toLowerCase().includes('detail')||message.text.toLowerCase().includes('topics') || message.text.toLowerCase().includes('link')||message.text.toLowerCase().includes('resource')||message.text.toLowerCase().includes('website')) {
    	var more = 'It introduces you to application protocols for large scale distributed systems including object request brokers, asynchronous messaging, and web services.\n For more details refer http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE273.html'
    	return cb(false, more);
    }
    
    else{
    	var description = 'CMPE 273 or Enterprise Distributed systems is a graduate level course at SJSU Computer/Software Engineering Department.'
        return cb(false, description);
    }
      
}