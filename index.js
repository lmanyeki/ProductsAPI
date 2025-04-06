import express from "express";
import productsRouter from "./routes/productsRouter.js";

const app = express();

app.use(express.json());
app.use("/products", productsRouter);

export default app;
