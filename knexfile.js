// Update with your config settings.
const localPg = {
  host: "localhost",
  database: "db",
  user: "user",
  password: "1234asdf"
};

// tell production environment to look at environment variables for DB url
const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: {
      directory: "./database/seed"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },
  production: {
    client: "pg",
    connection: productionDbConnection,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seed"
    }
  }
};
