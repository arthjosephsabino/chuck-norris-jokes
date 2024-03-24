import { RequestHandler } from "express";
import createHttpError from "http-errors";
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
  const { query } = req.query;
  try {
    if (!query) {
      throw createHttpError(400, "Query is required");
    }
    const url = `${env.API_URL}/search?query=${query}`;
    getRequest(url, res, next);
  } catch (error) {
    next(error);
  }
};
