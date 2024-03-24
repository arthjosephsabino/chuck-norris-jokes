import { RequestHandler } from "express";
import https from "node:https";
import env from "../util/validateEnv";

export const getRandomJoke: RequestHandler = async (req, res, next) => {
  if (req) {
    const request = https.get(`${env.API_URL}/jokes/random`, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data = data + chunk.toString();
      });
      response.on("end", () => {
        const body = JSON.parse(data);
        res.status(200).json(body);
      });
    });
    request.on("error", (error) => {
      next(error);
    });
    request.end();
  }
};
