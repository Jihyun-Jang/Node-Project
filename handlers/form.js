const fs = require('fs');
const path = require('path');

function formHandler(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'form.html');
  fs.readFile(filePath, 'utf-8', (error, html) => {
    if (error) {
      console.log(error);
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end('<h1> Sorry, page is not found</h1>');
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(html);
    }
  });
}

module.exports = formHandler;
