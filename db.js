const Pool = require("pg").Pool;
const config = require("config");
const pool = new Pool({
    user: "postgres",
    password: config.get("DB_PASSWORD"),
    host: "localhost",
    port: 5432,
    database: "node_postgres"
});

module.exports = pool;