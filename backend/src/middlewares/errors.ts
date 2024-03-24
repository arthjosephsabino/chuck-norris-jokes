import { NextFunction, Request, Response } from "express";
import { isHttpError } from "http-errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  console.error(err);
  let statusCode = 500;
  let errorMessage = "Something went wrong.";
  if (isHttpError(err)) {
    statusCode = err.status;
    errorMessage = err.message;
  }
  res.status(statusCode).send({ errors: [{ message: errorMessage }] });
};