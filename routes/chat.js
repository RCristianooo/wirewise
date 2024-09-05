import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import { addConversation, createChat, getAllChats } from '../controllers/chat.js';

const router = express.Router();

router.post("/new", isAuth, createChat);
router.get("/all", isAuth, getAllChats)
router.post("/:id", isAuth, addConversation)

export default router;