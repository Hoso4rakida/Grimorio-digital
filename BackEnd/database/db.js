const { pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "grimoriodigital",
    password: "7931",
    port: 5432
});

module.exports = pool;