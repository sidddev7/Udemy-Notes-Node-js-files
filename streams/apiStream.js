const fs=require("fs")
const http = require('http');


const server=http.createServer((req,res)=>{
    const readStream=fs.createReadStream("./test.pdf",{
      highWaterMark:20
    })
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        // 'Content-Disposition': 'attachment; filename="downloaded-file.pdf"',
        // 'Content-Length': stat.size,
      });
    readStream.pipe(res)
})

server.listen(3000)