import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import categoriesRouter from "./routers/categoriesRouter.js";


const startServer = () => {

    const app = express();

    app.use(cors());
    app.use(express.json());


    app.use("/api/categories", categoriesRouter);


    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT;
    app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;