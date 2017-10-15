'use strict';

var iothub = require('azure-iothub');

var connStr = '<IOT-HUB-CONNECTION-STRING>';

var registry = iothub.Registry.fromConnectionString(connStr);

var device = new iothub.Device(null);
device.deviceId = 'MyDevice';
registry.create(device, function(err, deviceInfo, res) {
  if (err) {
    registry.get(device.deviceId, printDeviceInfo);
  }
  if (deviceInfo) {
    printDeviceInfo(err, deviceInfo, res)
  }
});

function printDeviceInfo(err, deviceInfo, res) {
  if (deviceInfo) {
    console.log('Device id: ' + deviceInfo.deviceId);
  }
}