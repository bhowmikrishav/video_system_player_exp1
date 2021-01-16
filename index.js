var http = require('http');
var fs = require('fs/promises')

http.createServer(async (req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.end(await fs.readFile('./index.html'))
    }else{
        const n = req.url.substr(1,9);
        res.setHeader('Content-Type', 'video/webm')
        res.end(await fs.readFile('./clips/output'+n+'.webm'))
    }
}).listen(80);