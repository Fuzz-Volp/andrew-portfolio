import {
  apiController,
  dataController,
} from "../../controllers/api/ArtController";
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.data = {};
  next();
});

/**
 * User Routes:
 */

//Index: api/arts
router.get("/", dataController.index, apiController.index);
//Show: api/arts/:id
router.get("./:id", dataController.show, apiController.show);

/**
 *  Admin Routes:
 */

// Index: api/admins/arts
// Delete: api/admins/arts/:id
// Update: api/admins/arts/:id
// Create: api/admins/arts
router.post("admins/arts", dataController.create, apiController.index);

// Show: api/admins/arts/:id

export default router;
