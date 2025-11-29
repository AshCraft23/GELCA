import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoutes from "./routes/data.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", dataRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${process.env.PORT}`);
});
