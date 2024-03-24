import { RequestHandler } from "express";
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
  const { query } = req.params;
  const url = `${env.API_URL}/search?query=${query}`;
  getRequest(url, res, next);
};
