const http = require('http')

server = http.createServer((req, res) => {
    //console.log('Abbas');
    //res.write();

    const url = req.url

    if (url === '/home') {
        res.write('<html>')
        res.write('<head><title>Introduction Page</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        return res.end()
    }

    else if (url === '/about') {
        res.write('<html>')
        res.write('<head><title>Introduction Page</title></head>')
        res.write('<body><h1>Welcome to about us page</h1></body>')
        res.write('</html>')
        return res.end()
    }

    else if (url === '/node') {
        res.write('<html>')
        res.write('<head><title>Introduction Page</title></head>')
        res.write('<body><h1>Welcome to my Node js Project</h1></body>')
        res.write('</html>')
        return res.end()
    }

    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Introduction Page</title></head>')
    res.write('<body><h1>Hello from Node.js</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(4000)