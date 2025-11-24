import mysql from "mysql2/promise";

function getDbPort(): number {
  const port = parseInt(process.env.DB_PORT || "3306", 10);
  return isNaN(port) ? 3306 : port;
}

// Pool de conexiones para reutilizar conexiones a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: getDbPort(),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
