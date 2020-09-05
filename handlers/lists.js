const fs = require('fs');
const path = require('path');
const model = require('../model');

function listsHandler(req, res) {

  const filePath = path.join(__dirname, '..', 'public', 'display.html');

  fs.readFile(filePath, 'utf-8', (error, html) => {

    if (error) {
      console.log(error);
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end('<h1> Sorry, page is not found</h1>');
    } else {
      model.getPosts()
        .then((result) => {
          const users = result.rows;
          const article = users.map((postObj) => {
            return `<article>
               <p>${postObj.username}</p>
               <p>${postObj.post}</p>
               <p>${postObj.post_date.toString().split(" ").slice(0, 4).join(" ")}</p>
            </article>`;
          });
          const newFile = html.replace(
            `<!-- <article> comes here -->`,
            article.join('\n')
          );
          res.writeHead(200, { 'content-type': 'text/html' });
          res.end(newFile);
        });
    };

  });

}

module.exports = listsHandler;