const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>This is your first page</h1>');
  } else if (url === '/goodbye') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>Goodbye page</h1>');
  } else if (url === '/homepage') {
    res.writeHead(302, { location: '/' });
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
