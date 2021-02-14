const EventEmitter = require('events');

const myEvent = require('events');
const eventofMy = new myEvent();

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log("tutorial event has occured!");

});

eventEmitter.emit('tutoria');

eventofMy.on('xhttp',function(){
    console.log("ok i am fired!");
});

eventofMy.emit('xhttp');

const eventX = require('events');
const summation = new eventX();

 summation.on('sum',(num1,num2)=>{
   console.log(num1+num2);
});

summation.emit('sum',12,222);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}


let pedro = new Person('pedro');
pedro.on('name',function(){
    console.log('name is : ' + pedro.name);
});
pedro.emit('name');
