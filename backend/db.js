import pkg from "pg";
const { Pool } = pkg;

// Leer variables de entorno específicas para Render
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
} = process.env;

console.log("Conectando a PostgreSQL con los siguientes datos:");
console.log("Host:", DB_HOST);
console.log("Usuario:", DB_USER);
console.log("Database:", DB_NAME);
console.log("Puerto:", DB_PORT);

const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT || 5432,
  ssl: { rejectUnauthorized: false }, // Render requiere SSL
});

pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL en Render"))
  .catch((err) => {
    console.error("❌ Error de conexión PostgreSQL:", err.message);
    console.error("Detalles completos:", err);
  });

export default pool;