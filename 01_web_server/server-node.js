const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("this is home :)");
  } else if (req.url === '/about'){
    res.statusCode = 200;
    res.setHeader('contant-Type', 'text/plan');
    res.end("This is about page");
  } else {
    res.statusCode = 404;
    res.setHeader('content-Type', 'text/plain');
    res.end("404 page not found");
  }
})

server.listen(port,hostname, ()=>{
  console.log(`Listening at http://${hostname}:${port}`);
})