import { NextFunction, Response } from "express";
import https from "node:https";
export const getRequest = (url: string, res: Response, next: NextFunction) => {
  const request = https.get(url, (response) => {
    console.log(`GET Request from url: ${url}`);
    let data = "";
    response.on("data", (chunk) => {
      data = data + chunk.toString();
    });
    response.on("end", () => {
      const body = JSON.parse(data);
      console.log(`Response successful with status code: 200`);
      res.status(200).json({ data: body });
    });
  });
  request.on("error", (error) => {
    console.error(error);
    next(error);
  });
  request.end();
};
