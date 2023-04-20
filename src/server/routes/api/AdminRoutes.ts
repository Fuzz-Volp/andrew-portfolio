import express from "express";

import controller from "../../controllers/api/AdminController";
import extractFirebaseInfo from "../../middleware/extractFirebaseInfo";

const router = express.Router();

router.get("/admins/validate", extractFirebaseInfo, controller.validate);
router.get("/admins/:userID", controller.read);
router.post("/admins/create", extractFirebaseInfo, controller.create);
router.post("/admins/login", extractFirebaseInfo, controller.login);
router.get("/admins", controller.readAll);

export = router;
