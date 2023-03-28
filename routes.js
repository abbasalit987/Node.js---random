const fs = require('fs')

const requestHandler = (req, res) => {

    const url = req.url
    const method = req.method

    if (url === '/') {

    //const filepath = path.join(__dirname, 'message.txt')

    fs.readFile("message.txt", {encoding : 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err)
        }

        console.log('data from the file: ',data)
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    })

    // res.write('<html>');
    // res.write('<head><title>Enter Message</title><head>');
    // res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    // res.write('</html>');
    // return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
      const message = parsedBody.split('=')[0];
      fs.writeFileSync('message.txt', message);
    });
    
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
}

// module.exports = requestHandler
module.exports = {
    handler : requestHandler,
    someText : 'Hello complicated node.js'
}