var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('data_received', () => {
    console.log("data received event....");
});

eventEmitter.on('data_sent', () => {
    console.log("data sent event....");
});

eventEmitter.on('data_read', () => {
    console.log("data read event....");
});

eventEmitter.emit('data_received');
eventEmitter.emit('data_sent');
eventEmitter.emit('data_read');


//once method - event will be aclled only once
eventEmitter.once('sample_once', () => {
    console.log("sample_once event....");
});

eventEmitter.emit('sample_once');
eventEmitter.emit('sample_once');