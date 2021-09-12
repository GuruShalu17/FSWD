const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/siva'){
        res.write("Never Give Up")
        res.end()
    }
})

server.listen(8081,()=>{console.log("Its Working")})
