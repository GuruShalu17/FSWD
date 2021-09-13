const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/siva'){
        res.writeHead(207,{'Content-Type': 'text/html'})
        res.write("Never Give Up")
        res.end()
    }
})

server.listen(8081,()=>{console.log("Its Working")})
