//https://api.chucknorris.io/jokes/categories

import { RequestHandler } from "express";
import https from "node:https";
import env from "../util/validateEnv";

export const getCategories: RequestHandler = async (_, res, next) => {
  const url = `${env.API_URL}/jokes/categories`;
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
