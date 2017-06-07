
'use strict';

const request = require('superagent');

module.exports.process = function process(intentData,message,cb) {
	var general = 'Details about the MS CMPE and SE pre-requisites can be found at https://cmpe.sjsu.edu/content/ms-admission-conditions.\n Information for pre-requisites test registration and test rules can be found at https://cmpe.sjsu.edu/content/ms-admission-conditions.'
    
	if(intentData.intent[0].value !== 'prereqs')
        return cb(new Error(`Expected cmpe273 intent, got ${intentData.intent[0].value}`));
   
    else if (message.text.toLowerCase().includes('computer engineering')||message.text.toLowerCase().includes('cmpe')) {
    	var cmpe = 'MS CMPE has the following three pre-requisites:\n 1.CMPE 180-90: Digital & Microprocessor Design\n 2.CMPE 180-92: Object Oriented Programming and Data Structures (C++)\n 3. CMPE 180-94: Operating System Design\n'
    	return cb(false, cmpe + general);
    }
    
    else if (message.text.toLowerCase().includes('software engineering')||message.text.toLowerCase().includes('se')) {
    	var se = 'MS SE has the following three pre-requisites:\n 1.CMPE 138: Database Systems\n 2.CMPE 180-92: Object Oriented Programming and Data Structures (C++)\n 3. CMPE 180-94: Operating System Design\n'
    	return cb(false, se + general);
    }
   
    else{
        return cb(false, general);
    }
      
}