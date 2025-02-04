const fs=require('fs')

fs.readFile("./q1.js","utf8",(err,data)=>{


    if(err){

        console.log("no file exist")
    }
    else{
        console.log(data)
    }   
});


