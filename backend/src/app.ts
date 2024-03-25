import apicache from "apicache";
import express, { Request, Response } from "express";
import createHttpError from "http-errors";
import path from "path";
import { errorHandler } from "./middlewares/errors";
import categoriesRoutes from "./routes/categories";
import jokesRoutes from "./routes/jokes";
import env from "./util/validateEnv";

const app = express();
const cache = apicache.middleware;
app.use(express.json());
//routes here
app.use("/api/jokes", jokesRoutes);
app.use("/api/categories", cache("30 days"), categoriesRoutes);
const __dirname1 = path.resolve();
if (env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "../frontend/build")));
  app.get("*", (_req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname1, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
  });
}
app.use((_, __, next) => {
  next(createHttpError(404, "Endpoint not found"));
});
app.use(errorHandler);

export default app;
