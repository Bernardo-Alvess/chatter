import express from "express"
import { login, logout, signup } from "../controllers/auth.controllers.js"

const router = express.Router()

router.get("/login", signup)

router.get("/signup", login)

router.get("/logout", logout)

export default router;