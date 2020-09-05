const model = require('../model');

function submitHandler(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const data = new URLSearchParams(body);
    const postObj = Object.fromEntries(data);

    model.newPost(postObj)
      .then(() => {
        res.writeHead(302, { location: "/lists" });
        res.end();
      })
      .catch((error) => {
        console.log(error);
        res.writeHead(500, { "content-type": "text/html" });
        res.end("<h1>Your data is not sent well</h1>");
      });
  });
  req.on("error", (error) => {
    res.writeHead(500, { "content-type": "text/html" });
    res.end("<h1>Server Error</h1>");
  });
}

module.exports = submitHandler;
