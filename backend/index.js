import express from "express";
import cors from "cors";

import alumnosRouter from "./rutas/alumnos.js";
import registrosRouter from "./rutas/registros.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/alumnos", alumnosRouter);
app.use("/api/registros", registrosRouter);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("✅ Backend funcionando en Render 🚀");
});

// Puerto (Render inyecta PORT)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});