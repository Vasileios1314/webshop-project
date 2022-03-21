const express = require("express");
const cors = require("cors");
const productRouter = require("./routers/products");
const categoryRouter = require("./routers/categories");

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
