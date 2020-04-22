/* set up configuration of  PostgreSQL connection. */
/* src: https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/*/

// Create Database and use the following credentials:
const { Pool } = require('pg');
/*
const connectionString = "postgres://postgres:postgres@localhost:5432/justfeastdb";

const pool = new Pool( {
    connectionString: connectionString
});*/

const pool = new Pool( {
    host: "localhost",
    port: 5433,
    user: "postgres",
    database: "justfeastdb",
    password: "postgres",
});

pool.on('connect', () => {
    console.log('connected to the Database');
});

/*
pool.query('SELECT NOW()').then(result => {
    console.log(result.rows)
    pool.end()
});*/

module.exports = pool;