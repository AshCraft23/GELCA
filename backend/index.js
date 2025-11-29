import express from "express";
import cors from "cors";
import cosechasRouter from "./routes/cosechas.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/cosechas", cosechasRouter);

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor ejecutándose en puerto", PORT);
});
