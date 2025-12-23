import pkg from "pg";
const { Pool } = pkg;

// Usar la Internal Database URL de Render
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 
    "postgresql://particulares_db_kog5_user:5N1Jmr2ktNC0MosPezKLqhCU2XaQl8fv@dpg-d54nmnv5r7bs73ej60t0-a/particulares_db_kog5",
  ssl: { rejectUnauthorized: false }, // necesario en Render
});

pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) =>
    console.error("❌ Error de conexión PostgreSQL:", err)
  );

export default pool;