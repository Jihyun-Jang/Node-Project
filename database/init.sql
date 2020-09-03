BEGIN;

    DROP TABLE IF EXISTS users, learnt_posts;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL
    );

    CREATE TABLE learnt_posts
    (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        thoughts TEXT NOT NULL,
        date VARCHAR(255) NOT NULL

    );

    INSERT INTO users
        (username)
    VALUES
        ('Jihyun Jang'),
        ('Danilo Cupido'),
        ('Daniele Mura')
    ;

    INSERT INTO learnt_posts
        (user_id, thoughts, date)
    VALUES
        ('Harry Potter', 'I have learnt node.js, psql and express', '2, 9, 2020'),
        ('Kate', 'I am learning how to start online business', '2, 9, 2020'),
        ('Danny', 'How to do amazing latte art', '1, 9, 2020'),
        ('Daniele', 'How to make nice baked potato', '29, 8, 2020')
    ;

    COMMIT;