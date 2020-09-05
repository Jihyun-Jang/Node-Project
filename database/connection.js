const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString });


module.exports = db;

// DATABASE_URL='postgres://myuser:mypassword@localhost:5432/what_learnt'
