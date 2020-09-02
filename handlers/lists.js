const fs = require('fs');
const path = require('path');
const database = require('../model');

function listsHandler(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'display.html');

  fs.readFile(filePath, 'utf-8', (error, html) => {
    if (error) {
      console.log(error);
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end('<h1> Sorry, page is not found</h1>');
    } else {
      const article = database.map((thoughtsObj) => {
        return `<article>
        <p>${thoughtsObj.name}</p>
        <p>${thoughtsObj.thoughts}</p>
        <p>${thoughtsObj.date}</p>
      </article>`;
      });

      const newFile = html.replace(
        `<!-- <article> comes here -->`,
        article.join('\n')
      );

      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(newFile);
    }
  });
}

module.exports = listsHandler;
