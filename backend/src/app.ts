import express from "express";
import { errorHandler } from "./middlewares/errors";
import jokesRoutes from './routes/jokes';

const app = express();
app.use(express.json());
//routes here
app.use('/api/jokes', jokesRoutes)
app.use(errorHandler);

export default app