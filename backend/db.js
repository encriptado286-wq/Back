import pkg from "pg";
const { Pool } = pkg;

// Configuración de base de datos según entorno
const pool = new Pool({
  host: process.env.DB_HOST || process.env.PGHOST || "localhost",
  user: process.env.DB_USER || process.env.PGUSER || "postgres",
  password: process.env.DB_PASSWORD || process.env.PGPASSWORD || "",
  database: process.env.DB_NAME || process.env.PGDATABASE || "Particulares",
  port: process.env.DB_PORT || process.env.PGPORT || 5432,
  ssl: process.env.DB_HOST ? { rejectUnauthorized: false } : false, // solo SSL si DB_HOST existe
});

pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) =>
    console.error("❌ Error de conexión PostgreSQL:", err)
  );

export default pool;