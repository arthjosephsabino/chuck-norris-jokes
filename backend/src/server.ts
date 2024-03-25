import "dotenv/config";
import { Request, Response } from "express";
import app from "./app";
import env from "./util/validateEnv";
const port = env.PORT;
if (env.NODE_ENV !== "production") {
  app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
  });
}

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
