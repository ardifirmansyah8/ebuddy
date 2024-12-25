import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send({ error: "Unauthorized request: No token provided" });
    return;
  }

  const idToken = token.split(" ")[1];

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(() => next())
    .catch((err) => {
      console.error("Token verification error:", err);
      res.status(403).send({ error: "Unauthorized request: Invalid token" });
    });
};
