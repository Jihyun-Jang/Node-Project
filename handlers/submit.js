const database = require('../model');

function submitHandler(req, res) {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const data = new URLSearchParams(body);
    const name = data.get('name');
    const thoughts = data.get('thoughts');
    const date = new Date();

    let object = {
      name: name,
      thoughts: thoughts,
      date: `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`,
    };

    database.unshift(object);
    // console.log(object);

    res.writeHead(302, { location: '/lists' });
    res.end();
  });
}

module.exports = submitHandler;
