import express from "express";
import { fetchUserData, updateUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();
router.get("/fetch-user-data", authMiddleware, fetchUserData);
router.post("/update-user-data", authMiddleware, updateUserData);

export default router;
