

const os=require('os')



setInterval(()=>{    
    console.log("Current Memory Usage: ", os.totalmem()-os.freemem());
    let per=os.freemem()*100/os.totalmem();
    console.log("Free memory: "+per+"%");
},5000) 