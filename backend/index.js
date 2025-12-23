import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import alumnosRouter from "./rutas/alumnos.js";
import registrosRouter from "./rutas/registros.js";
import pool from "./db.js"; // Importar la conexión a la DB

dotenv.config();

const app = express();

// Crear carpeta uploads si no existe
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Rutas API
app.use("/api/alumnos", alumnosRouter);
app.use("/api/registros", registrosRouter);

// Ruta test principal
app.get("/", (req, res) => {
  res.send("✅ Backend funcionando en Render 🚀");
});

// ✅ Nueva ruta para testear conexión a PostgreSQL
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, now: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ⚠️ IMPORTANTE PARA RENDER
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});