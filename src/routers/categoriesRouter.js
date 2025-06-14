import { Router } from "express";

import {
    getCategoriesController,
    getCategoryByIdController,
    addCategoryController,
    updateCategoryController,
    deleteCategoryController,
} from "../controllers/categories.controller.js";


const categoriesRouter = Router();

categoriesRouter.get("/", getCategoriesController);
categoriesRouter.get("/:id", getCategoryByIdController);
categoriesRouter.post("/", addCategoryController);
categoriesRouter.put("/:id", updateCategoryController);
categoriesRouter.delete("/:id", deleteCategoryController);


export default categoriesRouter;