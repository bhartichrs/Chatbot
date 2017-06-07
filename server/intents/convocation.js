'use strict';

const request = require('superagent');

module.exports.process = function process(intentData,message,cb) {

    if(intentData.intent[0].value !== 'convocation')
        return cb(new Error(`Expected convocation intent, got ${intentData.intent[0].value}`));
    
    else if (message.text.toLowerCase().includes('time')||message.text.toLowerCase().includes('date')||message.text.toLowerCase().includes('when')) {
    	var convo = 'Convocation ceremony for Computer & Software majors is on Friday, 26th May, 2017 at 3:00 pm. The line up and group photos will begin by 1:30pm and the guest entrance will be opened at 2:00pm.'
    	return cb(false, convo);
    }
    
    else if (message.text.toLowerCase().includes('registration')||message.text.toLowerCase().includes('register')){
    	var reg = 'The deadline to register is May 12th, 2017.'
    	var link = '\nThe link to register is https://events.r20.constantcontact.com/register/eventReg?oeidk=a07edvdcz5c5dbe1540&oseq=&c=&ch='
    	return cb(false, reg+link);
    }
    
    else if (message.text.toLowerCase().includes('tickets')||message.text.toLowerCase().includes('passes')||message.text.toLowerCase().includes('guests')) {
    	var tick = 'Students can purchase upto 4 guest tickets. Tickets are available at the Event Center Box Office, which is open Monday through Friday 10am-5pm.'
    	return cb(false, tick);
    }
    
    else
    	return cb(false, 'Information about graduation recognition ceremony can be found at https://engineering.sjsu.edu/graduation.');  
}