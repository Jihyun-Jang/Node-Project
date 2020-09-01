const homeHandler = require('./handlers/home');
const publicHandler = require('./handlers/public');
const formHandler = require('./handlers/form');
const listsHandler = require('./handlers/lists');

function router(req, res) {
  const url = req.url;
  if (url === '/') {
    homeHandler(req, res);
  } else if (url.includes('public')) {
    publicHandler(req, res);
  } else if (url === '/form') {
    formHandler(req, res);
  } else if (url === '/lists') {
    listsHandler(req, res);
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
}

module.exports = router;
