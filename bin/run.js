'use strict';

const slackClient = require('../server/slackClient');
const http = require('http');
const express = require('express');
const service = express();
const server = http.createServer(service);

const witToken = '5BK6IG6A6KZ4KI2AZN2A3PSI74OICBEK';
const witClient = require('../server/witClient')(witToken);

const slackToken = 'xoxb-176634697174-mX8mRPt5XaojefUe4KP4KTM5';
const slackLogLevel = 'verbose';

const rtm = slackClient.init(slackToken, slackLogLevel, witClient);
rtm.start();

slackClient.addAuthenticatedHandler(rtm, () => server.listen(3000));

server.on('listening', function() {
    console.log(`sjsu_bot is listening on ${server.address().port}.`);
});