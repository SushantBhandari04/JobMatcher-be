import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || "123";

export function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"];

    if (!token) {
        res.status(401).json({ message: "No token provided" });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (typeof decoded === "string") {
            res.status(401).json({ message: "Invalid token" });
            return
        }

        if (!decoded || !decoded.userId) {
            res.status(401).json({ message: "Invalid token" });
            return
        }

        if (!req.user) {
            (req as any).user = {};
        }
        (req as any).user.id = decoded.userId;
        next();
    }
    catch (e) {
        res.status(411).json({ message: "Invalid token" });
    }
}