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
    thoughts TEXT NOT NULL

);

INSERT INTO users
    (username)
VALUES
    ('Jihyun Jang'),
    ('Danilo Cupido'),
    ('Daniele Mura')
;

INSERT INTO learnt_posts
    (thoughts, user_id)
VALUES
    ('I have learnt node.js, psql and express', 1),
    ('I am learning how to start online business', 2),
    ('How to do amazing latte art', 3),
    ('How to make nice baked potato', 1)
;

COMMIT;