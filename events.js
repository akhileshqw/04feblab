const EventEmitter=require('events')
const os=require('os');
const myEmitter=new EventEmitter();

myEmitter.on("someEvent",()=>{
    const osDetails={
        Architecture:os.arch(),
        platform:os.platform(),
        type:os.type(),
        release:os.release(),
        totalMemory:os.totalmem(),
        freeMemory:os.freemem(),
        cpus:os.cpus(),

    }
    console.log(osDetails)
});



myEmitter.emit("someEvent")
