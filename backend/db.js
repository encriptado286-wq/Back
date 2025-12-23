import pkg from "pg";
const { Pool } = pkg;

// Configuración de la base de datos usando solo las variables de Render
const pool = new Pool({
  host: process.env.DB_HOST,        // Ej: dpg-d2f3m6jipnbc739miut0-a.oregon-postgres.render.com
  user: process.env.DB_USER,        // Ej: particulares_db_kog5_user
  password: process.env.DB_PASSWORD,// Ej: 5N1Jmr2ktNC0MosPezKLqhCU2XaQl8fv
  database: process.env.DB_NAME,    // Ej: particulares_db_kog5
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: false } // necesario para Render
});

// Intento de conexión
pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) => console.error("❌ Error de conexión PostgreSQL:", err));

export default pool;