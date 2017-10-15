var EventHubClient = require('azure-event-hubs').Client;

var connStr = '<EVENT-HUB-CONNECTION-STRING>';
var client = EventHubClient.fromConnectionString(connStr)
var readings = require('./readings.json');
var c = 0;
var keys = Object.keys(readings);
console.log("Waiting for turnstile entries...");
while (new Date().getSeconds() != 0) {
}
client.createSender()
    .then(function (tx) {
        setInterval(function () {
            if (c < keys.length) {
                var r = readings[keys[c]];
                r.entrytime = new Date().toISOString();
                console.log(r);
                tx.send(r);
                c++;
            }
            else {
                process.exit();
            }
         }, 1000);
    });
