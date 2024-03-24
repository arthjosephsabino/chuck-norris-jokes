import { NextFunction, Response } from "express";
import https from "node:https";
export const getRequest = (url: string, res: Response, next: NextFunction) => {
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
