import pg from "pg";
var Pool = pg.Pool;
var connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '130901',
    database: 'republica'
});
export default connection;
