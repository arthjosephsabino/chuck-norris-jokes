import { RequestHandler } from "express";
import createHttpError from "http-errors";
import NodeCache from "node-cache";
import https from "node:https";
import env from "../util/validateEnv";
import { getRequest } from "./request";

export const getRandomJoke: RequestHandler = async (req, res, next) => {
  const { category } = req.params;
  let url = `${env.API_URL}/random`;
  if (category) {
    url = `${url}?category=${category}`;
  }
  getRequest(url, res, next);
};

export const getJokesBySearch: RequestHandler = async (req, res, next) => {
  const { query, page, limit = 10 } = req.query;
  const startIndex = (parseInt(page as string) - 1) * parseInt(limit as string);
  const endIndex = parseInt(page as string) * parseInt(limit as string);
  console.log(`Request with startIndex: ${startIndex} - endIndex: ${endIndex}`);
  const nodeCache = new NodeCache();
  try {
    if (!query) {
      console.error("Search query missing.");
      throw createHttpError(400, "Query is required");
    }
    const url = `${env.API_URL}/search?query=${query}`;
    const getCache = nodeCache.get(url);
    if (getCache) {
      console.log("awd");
      res.status(200).json({
        data: getCache,
      });
    } else {
      const request = https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data = data + chunk.toString();
        });
        response.on("end", () => {
          console.log(
            `Return data with search filter: ${query} & page: ${page}`
          );
          const body = JSON.parse(data);
          const responseData = {
            total: body.total,
            result: body.result.slice(startIndex, endIndex),
          };
          nodeCache.set(url, responseData, 10000);
          res.status(200).json({
            data: responseData,
          });
        });
      });
      request.on("error", (error) => {
        console.error(error);
        next(error);
      });
      request.end();
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
