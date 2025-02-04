 
 const fs=require('fs')

//  fs.mkdir("newmkdir",(err)=>{

//     if(err){
//         console.log("folder already exist")
//     }else{
//         console.log("folder created")
//     }

//  });


//  fs.unlink("./abc.txt",(err)=>{

//     if(err){
//         console.log("folder not exist")
//     }else{
//         console.log("folder deleted")
//     }

//  });


//  fs.rename('old.txt', 'new.txt', (err) => {
//     if (err) {
//         console.log('Error renaming file:', err);
//     } else {
//         console.log('File renamed successfully!');
//     }
// });

fs.readdir('./', (err, files) => {
    if (err) {
        console.log('Error reading directory:', err);
    } else {
        console.log('Files in directory:', files);
    }
});