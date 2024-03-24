import express from "express";
import * as JokesController from "../controllers/jokes";

const router = express.Router();

router.get("/random", JokesController.getRandomJoke);
router.get("/search", JokesController.getJokesBySearch);

export default router;
