import * as JokesController from '../controllers/jokes';
import express from "express";

const router = express.Router()

router.get("/random", JokesController.getRandomJoke);

export default router