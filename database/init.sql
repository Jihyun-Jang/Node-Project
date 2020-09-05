BEGIN;

    DROP TABLE IF EXISTS users, learnt_posts
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE learnt_posts
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    post TEXT NOT NULL,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE

);

INSERT INTO users
    (username)
VALUES
    ('Jihyun Jang'),
    ('Danilo Cupido'),
    ('Daniele Mura')
;

INSERT INTO learnt_posts
    (user_id, post)
VALUES
    (1, 'I have learnt node.js, psql and express'),
    (2, 'I am learning how to start online business')
;

COMMIT;