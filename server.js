const http = require('http')

server = http.createServer((req, res) => {
    //console.log('Abbas');
    //res.write();
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Introduction Page</title></head>')
    res.write('<body><h1>Hello from Node.js</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(4000)