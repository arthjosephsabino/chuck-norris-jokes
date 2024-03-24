import apicache from "apicache";
import express from "express";
import createHttpError from "http-errors";
import { errorHandler } from "./middlewares/errors";
import categoriesRoutes from "./routes/categories";
import jokesRoutes from "./routes/jokes";

const app = express();
const cache = apicache.middleware;
app.use(express.json());
//routes here
app.use("/api/jokes", jokesRoutes);
app.use("/api/categories", cache("30 days"), categoriesRoutes);
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});
app.use(errorHandler);

export default app;
