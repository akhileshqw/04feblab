
const EventEmitter=require('events')
const os=require('os');
const myEmitter=new EventEmitter();

myEmitter.on("userDetails",(name,age)=>{
     
console.log("Name: "+name);
console.log("Age: "+age);


});



myEmitter.emit("userDetails","Akhi",18)


myEmitter.emit("userDetails","Akhi",18)

myEmitter.emit("userDetails","Akhi",18)
