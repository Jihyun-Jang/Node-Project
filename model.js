const db = require('./database/connection');

function newPost(postObj) {
    return db
        .query("INSERT INTO users(username) VALUES($1)", [postObj.name])
        .then(() => {
            return db
                .query(`SELECT id FROM users WHERE username=($1)`, [postObj.name])
                .then(item => {
                    return item.rows.map(obj => obj.id);
                })
                .then(idArr => {
                    return db.query("INSERT INTO learnt_posts(user_id, post) VALUES($1, $2)", [idArr[0], postObj.post])
                });
        });
}

function getPosts() {
    return db.query("SELECT * FROM users INNER JOIN learnt_posts ON users.id = learnt_posts.user_id ORDER BY learnt_posts.id DESC");
}

module.exports = { newPost, getPosts };