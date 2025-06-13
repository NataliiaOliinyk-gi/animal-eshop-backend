import "dotenv/config";

import startServer from "./server.js";
import { connectDatabase } from "./db/sequelize.js";

const boostrap = async () => {
    await connectDatabase();
    startServer();
};

boostrap();