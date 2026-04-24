import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const createToken = (
  id: string,
  email: string,
  expiresIn: string | number
) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET!, {
    expiresIn: expiresIn as any,
  });
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.signedCookies?.[COOKIE_NAME] ||
    req.cookies?.[COOKIE_NAME];

  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    res.locals.jwtData = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token Expired or Invalid" });
  }
};