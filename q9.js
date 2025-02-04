
const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    res.write("hello world")
    res.end()
     
});




server.listen(3000)
console.log("server is running on port 3000")   