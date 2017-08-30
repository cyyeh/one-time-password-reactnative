const twilio = require('twilio');
const twilioKeys = require('./twilioKeys');

const accountSid = twilioKeys.accountSid;
const authToken = twilioKeys.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);
