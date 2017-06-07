/**
 * code for specializations
 */
'use strict';

const request = require('superagent');

module.exports.process = function process(intentData,message,cb) {
    if(intentData.intent[0].value!='specialization')
        return cb(new Error(`Expected specialization intent, got ${intentData.intent[0].value}`));
    else if (message.text.includes('CMPE')||message.text.includes('computer engineering')||message.text.includes('cmpe')) {
    	 return cb(false, 'CMPE specializations offered are \n 1. System Design and Verification, \n 2. Network Systems, \n 3. Embedded Systems, \n 4. Secure Systems')}
    else if (message.text.includes('SE')||message.text.includes('software engineering')||message.text.includes('se')) {
   	 return cb(false, 'SE specializations offered are \n 1. Enterprise Software Technologies \n 2. Cloud Computing and Virtualization \n 3. Software Systems Engineering \n 4. Networking Software \n 5. Data Science');  
   }else if (message.text.includes(' EE ')||message.text.includes('electrical engineering')||message.text.includes(' ee ')) {
   	 return cb(false, 'EE specializations offered are \n 1. VLSI \n 2. Internetworking');  
   }
    else {
    	 return cb(false, 'Hi! I am not sure about that speciazlization please visit http://www.sjsu.edu for more details'); 
    }
    	
    
}/**
 * http://usejsdoc.org/
 */
