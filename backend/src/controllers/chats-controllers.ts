import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { gemini } from "../config/gemini-config.js";

export const generateChatCompletion = async ( 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ message: "Invalid message" });
  }

  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }

    // Convert chat history → Gemini format
    const contents = user.chats.map((chat) => ({
      role: chat.role === "assistant" ? "model" : "user",
      parts: [{ text: chat.content }],
    }));

    // Add new message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // Save user message
    user.chats.push({ role: "user", content: message });

    // Call Gemini
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
    });

    const reply =
      response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini";

    // Save assistant reply
    user.chats.push({
      role: "assistant",
      content: reply,
    });

    await user.save();

    return res.status(200).json({ chats: user.chats });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendChatsToUser = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        //user token check
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions did not match");
        }
        return res
            .status(200)
            .json({message: "OK", chats: user.chats });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          message: "ERROR",
          cause: (error as Error).message,
        });
    }
};

export const deleteChats = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        //user token check
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions did not match");
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res
            .status(200)
            .json({message: "OK"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          message: "ERROR",
          cause: (error as Error).message,
        });
    }
};