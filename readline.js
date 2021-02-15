const Event  = require('events');
const myInfo = new Event();
myInfo.on('hey',function(){
    console.log('htis is a good');
});

myInfo.emit('hey');