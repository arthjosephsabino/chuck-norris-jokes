import { RequestHandler } from "express";
import env from "../util/validateEnv";
import { getRequest } from "./request";

export const getCategories: RequestHandler = async (_, res, next) => {
  const url = `${env.API_URL}/categories`;
  getRequest(url, res, next);
};
