import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

// import archivos
import routes from './routes/index.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// conexión a la db
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
  });

// Rutas
app.use('/api', routes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});













