const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "thinkvision1.",
  host: "localhost",
  port: 5432,
  database: "lendingSystem"
});

module.exports = pool;