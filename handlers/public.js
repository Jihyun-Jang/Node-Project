const fs = require('fs');
const path = require('path');

const types = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpeg',
  js: 'application/javascript',
  ico: 'image/x-icon',
};

function publicHandler(req, res) {
  const url = req.url;
  const urlArray = url.split('.');
  const extention = urlArray[1];
  const type = types[extention];

  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end('<h1>Not found</h1>');
    } else {
      res.writeHead(200, { 'content-type': type });
      res.end(file);
    }
  });
}

module.exports = publicHandler;
