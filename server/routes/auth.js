import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router()

// Creating a user
router.post("/signup", signup )

// Sign in
router.post("/signin", signin)

// Google Authentication
router.post("/google", )


export default router;


