/**
 * code for sending addresses
 */
'use strict';

const request = require('superagent');

module.exports.process = function process(intentData,message,cb) {

    if(intentData.intent[0].value !== 'location')
        return cb(new Error(`Expected location intent, got ${intentData.intent[0].value}`));
    else if (message.text.includes('charles davidson college of engineering')||message.text.includes('coe')||message.text.includes('engineering building')||message.text.includes('charles w davidson college of engineering')) {
    	 return cb(false, 'Charles Davidson College of Engineering \n Address: 1 Washington Sq, San Jose, CA 95192 \n Phone: (408) 924-3800');  
    }
    else if (message.text.includes('mlk')||message.text.includes('martin luther king library')||message.text.includes('library')) {
   	 return cb(false, 'Martin Luther King Library \n Address: 150 E San Fernando St, San Jose, CA 95112 \n Phone: (408) 808-2000');  
   }
    else {
    	 return cb(false, 'San Jose State University \n Address: 1 Washington Sq, San Jose, CA 95192 \n Phone: (408) 924-1000'); 
    }
    	
    
}