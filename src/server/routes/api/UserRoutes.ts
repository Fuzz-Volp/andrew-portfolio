import express from "express";
import {
  checkToken,
  dataController,
  apiController,
} from "../../controllers/api/UserController";
import { ensureLoggedIn } from "../../middleware/ensureLoggedIn";

const router = express.Router();

/**Routes */

// Index /api/admin
router.get("/", dataController.index, apiController.index);

// Delete /api/admins/:id

// Update /api/admin/:id
router.put("/:id", dataController.update, apiController.show);

// Create /api/admin
router.post("/", dataController.register, apiController.auth);

// Show /api/admin/:id
router.get("/:id", dataController.show, apiController.show);

//POST /api/admin/login
router.post("/login", dataController.login, apiController.auth);

//GET /api/admin/validata
router.get("/check-token", ensureLoggedIn, checkToken);

export = router;
