import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.RENDER_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) => {
    console.error("❌ Error de conexión PostgreSQL:", err.message);
    process.exit(1);
  });

export default pool;