require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: './src/database/database.db'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  }
};
