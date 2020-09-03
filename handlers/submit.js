const db = require("../database/connection");

function submitHandler(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const data = new URLSearchParams(body);
    const name = data.get("name");
    const thoughts = data.get("thoughts");
    const date = new Date();

    let obj = {
      name: name,
      thoughts: thoughts,
      date: `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`,
    };

    const values = [obj.name, obj.thoughts, obj.date];

    db.query(
      "INSERT INTO learnt_posts(user_id, thoughts, date) VALUES($1, $2, $3)",
      values
    )
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
