const http = require('http');
const hostname='127.0.0.1'
const port =3000
const server = http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Context-Type','text/plain')
    res.end('Chào mừng!!')
})

server.listen(port,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
})