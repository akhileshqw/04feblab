const os=require('os');


function displayDetails(){
   
    console.log("Current Memory Usage: ", os.totalmem()-os.freemem());
     
    let per=os.freemem()*100/os.totalmem();
    console.log("Free memory: "+per+"%");
  

}

setInterval(displayDetails,5000);
 


