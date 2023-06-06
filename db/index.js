require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,
});

db.connect();

module.exports = db;