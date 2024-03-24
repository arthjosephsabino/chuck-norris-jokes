import express from "express";
import * as CategoriesController from "../controllers/categories";

const router = express.Router();

router.get("/", CategoriesController.getCategories);

export default router;
