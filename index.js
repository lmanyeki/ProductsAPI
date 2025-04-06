import express from 'express';
import productsRouter from './routes/productsRouter.js';

const app = express();

app.use(express.json());
app.use("/products", productsRouter);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port 3000...`)
})
