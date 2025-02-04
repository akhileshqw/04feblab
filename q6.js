const fs=require('fs')

fs.readFile("./abcd.txt","utf8",(err,data)=>{


    if(err){
        
        console.log("no file exist")
    }
    else{
        console.log(data)
    }   
});


