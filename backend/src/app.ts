import "dotenv/config"; 
import express from "express";
import { json } from "body-parser";
import { errorHandler } from "./middlewares/errors";

const app = express();
app.use(json());
//routes here
app.use(errorHandler);

export default app