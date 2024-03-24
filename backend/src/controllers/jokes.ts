import { RequestHandler } from "express";
import https from "node:https";
import env from "../util/validateEnv";

export const getRandomJoke: RequestHandler = async (req, res, next) => {
  const { category } = req.body;
  let url = `${env.API_URL}/jokes/random`;
  if (category) {
    url = `${url}?category=${category}`;
  }
  const request = https.get(url, (response) => {
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
};