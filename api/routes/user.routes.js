import express from "express";
import { bill, test } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/test", test);
router.get("/bill", bill);

export default router;
