import {
  apiController,
  dataController,
} from "../../controllers/api/CategoryController";
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.data = {};
  next();
});

// Routes:

// Index: api/ideas
router.get("/", dataController.index, apiController.index);

// Delete: api/ideas/:id
router.delete("/:id", dataController.delete, apiController.show);

// Update: api/ideas/:id
router.put("/:id", dataController.update, apiController.show);

// Create: api/ideas
router.post("/", dataController.create, apiController.show);

// Show: api/ideas/:id
router.get("/:id", dataController.show, apiController.show);

export default router;
