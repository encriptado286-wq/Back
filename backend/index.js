import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import alumnosRouter from "./rutas/alumnos.js";
import registrosRouter from "./rutas/registros.js";

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

// Ruta test
app.get("/", (req, res) => {
  res.send("✅ Backend funcionando en Render 🚀");
});

// ⚠️ IMPORTANTE PARA RENDER
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});