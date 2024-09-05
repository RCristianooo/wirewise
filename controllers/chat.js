import { Chat } from "../models/Chat.js"

export const createChat = async(req, res) => {
    try {
        const userId = req.user._id;

        const chat = await Chat.create({
            user: userId,
        });

        res.json(chat)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};