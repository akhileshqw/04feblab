const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    res.write("welcome to node js ")
    res.end()
    if(req.url==='/about'){
        fs.readFile()
        res.write()
    }
})




server.listen(3000)